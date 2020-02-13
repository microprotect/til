function solution1(num) {
    return (num % 2 === 0) ? 'Even' : 'Odd';
}

function solution2(num) {
    return ['Even', 'Odd'][num % 2];
}

function solution3(num) {
    return 'Even Odd '.repeat(Math.ceil((num + 1) / 2)).split(' ')[num];
}

test('sample', () => {
    [solution1, solution2, solution3].forEach(solution => {
        expect(solution(3)).toEqual('Odd')
        expect(solution(4)).toEqual('Even')
        expect(solution(0)).toEqual('Even')
    });
});
