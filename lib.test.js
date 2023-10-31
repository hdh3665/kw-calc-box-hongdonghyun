const { test, expect } = require("@jest/globals");
const lib = require("./lib");

test("avg([3, 5, 7]) should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5);
});

test("avg([-5, 5]) should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});

test("prime(3) is true", () => {
    expect(lib.prime(3)).toBe(true);
});

test("prime(13) is true", () => {
    expect(lib.prime(13)).toBe(true);
});

test("prime(16) is false", () => {
    expect(lib.prime(16)).toBe(false);
});

test("fact(3) is 6", () => {
    expect(lib.fact(3)).toBe(6);
});

test("fact(5) is 120", () => {
    expect(lib.fact(5)).toBe(120);
});

test("fact(6) is 720", () => {
    expect(lib.fact(6)).toBe(720);
});

test("fact(16) is -1", () => {
    expect(lib.fact(16)).toBe(-1);
})