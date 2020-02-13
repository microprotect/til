function solution1(numbers) {
    const xs = [];
    numbers.forEach((x, i) => {
       if (x !== numbers[i - 1]) {
           xs.push(x);
       }
    });
    return xs;
}

function solution2(numbers) {
    return numbers.filter((_, i) => numbers[i] !== numbers[i - 1]);
}

function solution3(numbers) {
    let xs = [];
    let last = null;
    numbers.forEach((x, i) => {
       if (x !== last) {
           xs = [...xs, x];
           last = x;
       }
    });
    return xs;
}

function solution4(numbers) {
    return numbers.reduce(({ xs, last }, x) => ({
        xs: x !== last ? [...xs, x] : xs,
        last: x,
    }), { xs: [], last: null }).xs;
}

test('sample', () => {
    [solution1, solution2, solution3, solution4].forEach(solution => {
        expect(solution([1, 1, 3, 3, 0, 1, 1])).toEqual([1, 3, 0, 1]);
        expect(solution([4, 4, 4, 3, 3])).toEqual([4, 3]);
        expect(solution([4, 4, 4])).toEqual([4]);
    });
});
