import calculator from "./calculator";

test('add 3 and 4', () => {
    expect(calculator.add(3, 4)).toBe(7);
})

test('add ! and 4', () => {
    expect(calculator.add('!', 4)).toBe(null);
})

test('subtract 4 from 9', () => {
    expect(calculator.subtract(9, 4)).toBe(5);
})

test('mutliply 5 and 3', () => {
    expect(calculator.multiply(5, 3)).toBe(15);
})

test('divide 64 by 8', () => {
    expect(calculator.divide(64, 8)).toBe(8);
})
