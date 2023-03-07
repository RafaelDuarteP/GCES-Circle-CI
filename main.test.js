const Add = require('./main');

test('Add function works correctly', () => {
  expect(Add(2, 3)).toBe(5);
  expect(Add(5, 5)).toBe(10);
});
