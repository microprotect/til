function solution(numbers, commands) {
    return commands.map(command => kthNumber(numbers, command));
}

function kthNumber(numbers, [i, j, k]) {
    return numbers.slice(i - 1, j).sort((a, b) => a - b)[k - 1];
}

test('sample', () => {
    expect(
        solution(
            [1, 5, 2, 6, 3, 7, 4], 
            [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
        )
    ).toEqual([5, 6, 3]);
});

test('kthNumber', () => {
    expect(kthNumber([1, 5, 2, 6, 3, 7, 4], [2, 5, 3])).toEqual(5);
    expect(kthNumber([1, 15, 2, 6, 3, 7, 4], [2, 5, 3])).toEqual(6);
});
