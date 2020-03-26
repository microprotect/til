function solution1(arr) {
    if (arr.length === 1) {
        return [-1];
    }

    arr.sort((a, b) => b - a).pop();
    return arr;
}

const gt = (n) => x => x > n;

function solution2(numbers) {
    if (numbers.length === 1) {
        return [-1];
    }
    return numbers.filter(gt(Math.min(...numbers)));
}

function solution3(numbers) {
    if (numbers.length === 1) {
        return [-1];
    }

    const minimum = Math.min(...numbers);
    return numbers.filter(x => x > minimum);
}


function solution4(numbers) {
    const minimum = Math.min(...numbers);
    return numbers.length === 1 ? [-1] : numbers.filter(x => x > minimum);
}

test('sample', () => {
    [solution1, solution2, solution3, solution4].forEach(solution => {
        expect(solution([4, 3, 2, 1])).toStrictEqual([4, 3, 2]);
        expect(solution([10])).toStrictEqual([-1]);    
    });
})