function solution1(number) {
    return (''+number).split('').map((n) => parseInt(n)).reverse();
}

const Integer = x => parseInt(x, 10)

function solution2(number) {
    return [...String(number)].map(Integer).reverse();
}

function solution3(number) {
    const f = x => x === 0 ? [] : [x % 10, ...f(Integer(x / 10))];
    return f(number);
}

test('sample', () => {
    [solution1, solution2, solution3].forEach(solution => {
        expect(solution(12345)).toStrictEqual([5, 4, 3, 2, 1]);
    });
});
