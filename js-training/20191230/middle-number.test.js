function solution1(text) {
    const middle = text.length / 2;
    const adjust = 1 - text.length % 2;
    return text.slice(middle - adjust, middle + 1);
}

function solution2(text) {
    if (text.length <= 2) {
        return text;
    }
    return solution2(text.slice(1, text.length - 1));
}

test('sample', () => {
    [solution1, solution2].forEach(solution => {
        expect(solution('abcde')).toBe('c');
        expect(solution('qwer')).toBe('we');
        expect(solution('')).toBe('');
    });
});
