import './example.test.js';

import { getDiff, getAdd, } from '../utils.js';

const test = QUnit.test;

test('it should return 7 when provided 9 and 2', (expect) => {
    const expected = 7;
    const actual = getDiff(9, 2);
    expect.equal(actual, expected);
});

test('it should return -4 when provided 5 and 9', (expect) => {
    const expected = -4;
    const actual = getDiff(5, 9);
    expect.equal(actual, expected);
});


test('it should return 2 when provided 1 and 1', (expect) => {
    const expected = 2;
    const actual = getAdd(1, 1);
    expect.equal(actual, expected);
});

test('it should return 2 when provided 2 and 0', (expect) => {
    const expected = 2;
    const actual = getAdd(2, 0);
    expect.equal(actual, expected);
});