function solution(numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    return numbers.reduce((a, b) => a + b) / numbers.length;
}

test('simple', () => {
    expect(solution([1, 2, 3, 4])).toBe(2.5);
    expect(solution([5, 5])).toBe(5);
    expect(solution([1])).toBe(1);
    expect(solution([])).toBe(0);
});
