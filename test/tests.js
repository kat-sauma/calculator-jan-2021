import './example.test.js';

import { getDiff, getAdd, getMult, getDiv } from '../utils.js';

const test = QUnit.test;
// test subtraction
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

// test addition
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


// test multiplication
test('it should return 16 when provided 2 and 8', (expect) => {
    const expected = 16;
    const actual = getMult(2, 8);
    expect.equal(actual, expected);
});

test('it should return 50 when provided 5 and 10', (expect) => {
    const expected = 50;
    const actual = getMult(5, 10);
    expect.equal(actual, expected);
});


// test division
test('it should return 20 when provided 100 and 5', (expect) => {
    const expected = 20;
    const actual = getDiv(100, 5);
    expect.equal(actual, expected);
});

test('it should return .25 when provided 5 and 20', (expect) => {
    const expected = .25;
    const actual = getDiv(5, 20);
    expect.equal(actual, expected);
});