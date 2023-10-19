import caeserCipher from "./caeser_cipher";

test('shift defend the east wall of the castle by 1', () => {
    expect(caeserCipher('defend the east wall of the castle', 1))
    .toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
})

test('shift defend the east wall of the castle by 0', () => {
    expect(caeserCipher('defend the east wall of the castle', 0))
    .toBe('defend the east wall of the castle');
})

test('zebra has legs by 1', () => {
    expect(caeserCipher('zebra has legs', 1))
    .toBe('afcsb ibt mfht');
})

test('zebra has legs by 1', () => {
    expect(caeserCipher('zebra has legs!', 1))
    .toBe('afcsb ibt mfht!');
})