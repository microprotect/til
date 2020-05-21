function solution1(phoneNumber) {
    const hiddenSize = phoneNumber.length - 4;
    return '*'.repeat(hiddenSize) + phoneNumber.slice(hiddenSize);
}

function solution2(phoneNumber) {
    return phoneNumber
        .replace(/(.*)(.{4})/, (_, a, b) => a.replace(/./g, '*') + b);
}

function solution3(phoneNumber) {
    return phoneNumber.replace(/\d(?=\d{4})/g, '*');
}

function solution4(phoneNumber) {
    return phoneNumber.replace(/\d(?!\d{0,3}$)/g, '*');
}

test('sample', () => {
    [solution1, solution2, solution3, solution4].forEach(solution => {
        expect(solution('01033334444')).toBe('*******4444');
        expect(solution('027778888')).toBe('*****8888');
    });
});
