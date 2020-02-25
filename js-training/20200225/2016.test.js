// const DAY_NAMES = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const DAY_NAMES = 'SUN,MON,TUE,WED,THU,FRI,SAT'.split(',');
const MONTH_DAYS = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function solution1(month, day) {
    return DAY_NAMES[new Date(2016, month - 1, day).getDay()];
}

function solution2(month, day) {
    const monthDays = [...Array(month - 1)]
        .reduce((acc, _, i) => acc + MONTH_DAYS[i], 0);

    return DAY_NAMES[(DAY_NAMES.indexOf('FRI') + monthDays + day - 1) % 7];
}

function solution3(month, day) {
    const monthDays = MONTH_DAYS.slice(0, month - 1)
        .reduce((acc, cur) => acc + cur, 0);

    return DAY_NAMES[(DAY_NAMES.indexOf('FRI') + monthDays + day - 1) % 7];
}

test('sample', () => {
    [solution1, solution2, solution3].forEach(solution => {
        expect(solution(1, 1)).toBe('FRI');
        expect(solution(1, 2)).toBe('SAT');
        expect(solution(1, 3)).toBe('SUN');
        expect(solution(1, 31)).toBe('SUN');
        expect(solution(2, 1)).toBe('MON');
        expect(solution(2, 29)).toBe('MON');
        expect(solution(3, 1)).toBe('TUE');
        expect(solution(5, 24)).toBe('TUE');
        expect(solution(12, 31)).toBe('SAT');
    });
});
