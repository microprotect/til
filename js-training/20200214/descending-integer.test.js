function solution(num) {
    return parseInt([...('' + num)].sort((a, b) => b - a).join(''));
}

test('sample', () => {
    expect(solution(118372)).toEqual(873211);
});
