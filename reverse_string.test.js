import reverseString from "./reverse_string";

test('reverse apple', () => {
    expect(reverseString('apple')).toBe('elppa');
})

test('reverse empty string', () => {
    expect(reverseString('')).toBe('');
})

test('reverse empty string', () => {
    expect(reverseString(' ')).toBe(' ');
})

test('reverse Earth', () => {
    expect(reverseString('Earth')).toBe('htraE');
})