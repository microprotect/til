function solution1(arr1, arr2) {
    return arr1.map((arr, y) => 
        arr.map((value, x) => 
            value + arr2[y][x]
        )
    );
}

function solution2(arr1, arr2) {
    return [...Array(arr1.length)].map((_, y) => (
        [...Array(arr1[0].length)].map((_, x) => 
        arr1[y][x] + arr2[y][x])
    ))
}

test('sample', () => {
    [solution1, solution2].forEach(solution => {
        expect(
            solution([[1, 2], [2, 3]], [[3, 4], [5, 6]]))
            .toStrictEqual([[4, 6], [7, 9]]);
      
         expect(
             solution([[1],[2]], [[3],[4]]))
             .toStrictEqual([[4],[6]]);     
    });
 });
