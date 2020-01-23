const steps = require('./index');

test("Take in a number 5 and print out 5 steps", () => {
    expect(steps(5)).toBe("#\n##\n###\n####\n#####\n")
});

test("Take in a number 1 and print out 1 steps", () => {
    expect(steps(1)).toBe("#\n")
});

test("Take in a number 0 and print out 0 steps", () => {
    expect(steps(0)).toBe("")
});