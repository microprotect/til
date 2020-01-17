function solution1(a, b) {
    return [...Array(Math.abs(b - a) + 1)]
        .map((_, i) => Math.min(a, b) + i)
        .reduce((acc, cur) => acc + cur);
}

function solution2(a, b) {
    const [x, y] = [a, b].sort();
    return [...Array(y - x + 1)]
        .map((_, i) => x + i)
        .reduce((acc, cur) => acc + cur);
}

function solution3(a, b) {
    if (a > b) {
        return solution3(b, a);
    }
    return [...Array(b - a + 1)]
        .map((_, i) => a + i)
        .reduce((acc, cur) => acc + cur);
}

// ELSE는 영원히 쓰지 않는다.

test('sample', () => {
    [solution1, solution2, solution3].forEach(solution => {
        expect(solution(3, 5)).toBe(12);
        expect(solution(3, 3)).toBe(3);
        expect(solution(5, 3)).toBe(12);
    });
});
