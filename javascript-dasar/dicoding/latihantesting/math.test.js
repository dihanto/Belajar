const tambah = require('./math')

test('Menambahkan 1 dan 2 menghasilkan 3', () => {
    expect(tambah(1,2)).toBe(3);
});

test('Menambahkan 1 dan -1 menghasilkan 0', () => {
    expect(tambah(1,-1)).toBe(0);
});

test('Menbambahkan 10 dan 20 menghasilkan 30', () => {
    expect(tambah(10,20)).toBe(30);
});