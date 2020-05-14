function solution1(str) {
    const f = s => [...str.toLowerCase()].filter(it => it === s).length;
    return f('p') === f('y');
}

function counters(letters) {
    return [...letters].reduce((acc, cur) => ({
        ...acc,
        [cur]: (acc[cur] || 0) + 1,
    }), {});
}

function solution2(letters) {
    const { p, y } = counters(letters.toLowerCase());
    return p === y;
}

test('sample', () => {
    [solution1, solution2].forEach(solution => {        
        expect(solution('pPoooyY')).toBe(true);
        expect(solution('Pyy')).toBe(false);
    });
});

test('counters', () => {
    expect(counters('abca')).toEqual({ a: 2, b: 1, c: 1});
})
