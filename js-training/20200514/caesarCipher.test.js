const SPACE_ASCII_CODE = ' '.charCodeAt(0);
const LOWER_A_ASCII_CODE = 'a'.charCodeAt(0);
const LOWER_Z_ASCII_CODE = 'z'.charCodeAt(0);
const UPPER_Z_ASCII_CODE = 'Z'.charCodeAt(0);
const ALPHABET_LENGTH = LOWER_Z_ASCII_CODE - LOWER_A_ASCII_CODE + 1;

const lowers = 'abcdefghijklmnopqrstuvwxyz';
const uppers = lowers.toUpperCase();

function encode(ascii, n) {
  if (ascii === SPACE_ASCII_CODE) {
    return ascii;
  }

  const value = ascii + n;

  if ((ascii <= UPPER_Z_ASCII_CODE && value > UPPER_Z_ASCII_CODE)
   || (ascii >= LOWER_A_ASCII_CODE && value > LOWER_Z_ASCII_CODE)) {
    return value - ALPHABET_LENGTH;
  }

  return value;
}

function solution1(text, n) {
  return [...text].reduce((acc, cur, index) =>
    acc + String.fromCharCode(encode(text.charCodeAt(index), n)), '');
}

function solution2(text, n) {
  return [...text].map((word, index) =>
    String.fromCharCode(encode(text.charCodeAt(index), n))).join('');
}

function solution3(text, n) {
  const f = (xs, initial) => {
    const ys = [...xs.slice(n), ...xs.slice(0, n)];
    return [...xs].reduce((acc, cur, index) => ({
      ...acc,
      [cur]: ys[index],
    }), initial);
  };

  const table = f(uppers, f(lowers, {' ': ' '}));

  // console.log('*** solution3 ***');
  // console.log(JSON.stringify(table));
  // console.log('', Object.keys(table).join(''), '\n', Object.values(table).join(''));

  return [...text].map(i => table[i]).join('');
}

function solution4(text, n) {
  const source = [' ', ...lowers, ...uppers];
  const destination = [
    ' ',
    ...lowers.slice(n), ...lowers.slice(0, n),
    ...uppers.slice(n), ...uppers.slice(0, n),
  ];

  const table = new Map(source.map((x, i) => [x, destination[i]]));

  // console.log('*** solution4 ***');
  // console.log(JSON.stringify(Object.fromEntries(table.entries())));
  // console.log('', [...table.keys()].join(''),
  //             '\n', [...table.values()].join(''));

  return [...text].map(i => table.get(i)).join('');
}

function solution5(text, n) {
  const source = [' ', ...lowers, ...uppers];
  const destination = [
    ' ',
    ...lowers.slice(n), ...lowers.slice(0, n),
    ...uppers.slice(n), ...uppers.slice(0, n),
  ];

  // console.log('*** solution5 ***');
  // console.log('', source.join(''), '\n', destination.join(''));

  return [...text].map(i => destination[source.indexOf(i)]).join('');
}

test('Caesar cipher', () => {
  [
    solution1, solution2, solution3, solution4, solution5,
  ].forEach(solution => {
    expect(solution('AB', 1)).toBe('BC');
    expect(solution('Z', 1)).toBe('A');
    expect(solution('z', 1)).toBe('a');
    expect(solution('a B z', 4)).toBe('e F d');
  });
});

test('ASCII', () => {
  expect(encode(90, 1)).toBe(65);
  expect(encode(65, 2)).toBe(67);
  expect(encode(122, 1)).toBe(97);
})
