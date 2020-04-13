const Integer = x => parseInt(x, 10);

function solution(number) {
    return [...String(number)].reduce((acc, cur) => (acc + Integer(cur)),0);
}

test('sample', () => {
    expect(solution(123)).toBe(6);    
    expect(solution(987)).toBe(24);    
});