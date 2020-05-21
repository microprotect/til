function solution1(x) {
  const numbers = [...('' + x)].reduce((acc ,cur) =>
    acc + parseInt(cur, 10), 0)
  return (x % numbers === 0);
}

function solution2(x) {
  const sum = (acc, next) => {
    if (next.length === 0) {
      return acc;
    }

    const result = +next.slice(next.length - 1) + acc;

    return sum(result, next.slice(0, next.length - 1))
  }

  return (x % sum(0, x.toString()) === 0);
}

test('sample', () => {
  [solution1, solution2].forEach((solution) => {
    expect(solution(10)).toBe(true);
    expect(solution(12)).toBe(true);
    expect(solution(11)).toBe(false);
    expect(solution(13)).toBe(false);
  });
});
