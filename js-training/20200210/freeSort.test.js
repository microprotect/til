function solution1(strings, n) {
    return [...strings].sort().sort((a, b) => a.charCodeAt(n) - b.charCodeAt(n));
}

function solution2(strings, n) {
    return [...strings]
        // .sort((a, b) => a.charCodeAt(n) - b.charCodeAt(n) || compare(a, b));
        .sort(makeCompare(n));
}

function compare(a, b) {
    return a.localeCompare(b);
    // return [...a]
    //     .reduce((acc, _, i) => acc || a.charCodeAt(i) - b.charCodeAt(i), 0);
    const index = [...Array(Math.min(a.length, b.length))].map((_, i) => i)
        .find(i => a.charCodeAt(i) !== b.charCodeAt(i));
    return index === undefined
        ? a.length - b.length
        : a.charCodeAt(index) - b.charCodeAt(index);
}

function makeCompare(n) {
    return (a, b) => a.charCodeAt(n) - b.charCodeAt(n) || compare(a, b);
}

test('sample', () => {
    [solution1, solution2].forEach(solution => {
        expect(solution(['sun', 'bed', 'car'], 1))
            .toEqual(['car', 'bed', 'sun']);
        expect(solution(['abce', 'abcd', 'cdx'], 2))
            .toEqual(['abcd', 'abce', 'cdx']);
    });
});

test('compare', () => {
    expect(compare('bar', 'car')).toBeLessThan(0);
    expect(compare('car', 'bar')).toBeGreaterThan(0);
    expect(compare('ab', 'ac')).toBeLessThan(0);
    expect(compare('abc', 'abd')).toBeLessThan(0);
    expect(compare('abcd', 'abc')).toBeGreaterThan(0);
});

test('makeCompare', () => {
    expect(makeCompare(1)('abr', 'car')).toBeGreaterThan(0);
    expect(makeCompare(1)('bar', 'car')).toBeLessThan(0);
});
