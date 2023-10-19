import capitalize from "./capitalize";

test('Capitalized a of apple', () => {
    expect(capitalize('apple')).toBe('Apple');
})

test('Check empty string', () => {
    expect(capitalize('')).toBe(null);
})

test('Check empty string', () => {
    expect(capitalize(' ')).toBe(null);
})