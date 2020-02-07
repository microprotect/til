function solution1(s) {
    const fs = ['toUpperCase', 'toLowerCase'];
    return [...s].reduce((acc, cur, index) => acc + cur[fs[index % 2]](), '');
}

function solution2(s) {
    const fs = ['toUpperCase', 'toLowerCase'];
    return [...s].map((c, index) => c[fs[index % 2]]()).join('');
}

function solution3(s) {
    const nextF = {
        toUpperCase: 'toLowerCase',
        toLowerCase: 'toUpperCase',
    };

    return [...s].reduce(
        ({ text, f }, cur) => ({ text: text + cur[f](), f: nextF[f] }),
        { text: '', f: 'toUpperCase' }
    ).text;
}

function solution4(s) {
    const fs = {
        'lower': x => x.toLowerCase(),
        'upper': x => x.toUpperCase(),
    };

    const nextF = {
        [fs.upper]: fs.lower,
        [fs.lower]: fs.upper,
    };

    return [...s].reduce(
        ({ text, f }, cur) => ({ text: text + f(cur), f: nextF[f] }),
        { text: '', f: fs.upper }
    ).text;
}

function solution5(s) {
    function* g() {
        for (;;) {
            yield x => x.toUpperCase();
            yield x => x.toLowerCase();
        }
    }

    return [...s].reduce(
        ({ text, it }, cur) => ({ text: text + it.next().value(cur), it }),
        { text: '', it: g() }
    ).text;
}

function solution6(s) {
    function* f(text) {
        for (const x of text) {
            yield x;
        }
    }

    function* g() {
        for (;;) {
            yield x => x.toUpperCase();
            yield x => x.toLowerCase();
        }
    }

    return [...Array(s.length)].reduce(({ text, it1, it2 }) => ({
        text: text + it2.next().value(it1.next().value),
        it1,
        it2,
    }), { text: '', it1: f(s), it2: g() }).text;
}

function solution7(s) {
    function* g1(text) {
        let i = 0;

        for (const x of text) {
            yield x;

            i += 1;

            if (x !== ' ') {
                continue;
            }

            if (i % 2 !== 0) {
                yield '';
            }
            i = 0;
        }
    }

    function* g2() {
        for (;;) {
            yield x => x.toUpperCase();
            yield null;
        }
    }

    function* g3() {
        for (;;) {
            yield null;
            yield x => x.toLowerCase();
        }
    }

    return accumulate(
        [g1(s), g2(), g3()],
        ([x, f1, f2]) => (f1 || f2)(x),
    ).join('');
}

function accumulate(its, f) {
    const accumulator = [];
    for (;;) {
        const values = its.map(it => it.next().value);
        if (values.some(i => i === undefined)) {
            break;
        }
        accumulator.push(f(values));
    }
    return accumulator;
}

const solution8 = (s) => s.split(' ').map(convert).join(' ');

const convert = (s) => [...s]
    .map((c, i) => c[`to${['Upper', 'Lower'][i % 2]}Case`]()).join('');

const solution9 = (s) => s.replace(/\w+/g, convert);

const solution10 = (s) =>
    s.replace(/\w\w?/g, ([a, b]) => a.toUpperCase() + (b || '').toLowerCase());

test('sample',() => {
    [
        // solution1, solution2, solution3, solution4, solution5, solution6,
        solution7,
        solution8,
        solution9,
        solution10,
    ].forEach(solution => {
        expect(solution('try')).toBe('TrY');
        expect(solution('try hello world')).toBe('TrY HeLlO WoRlD');
        expect(solution('try  hello world')).toBe('TrY  HeLlO WoRlD');
        expect(solution('look hello world')).toBe('LoOk HeLlO WoRlD');
    });
});
