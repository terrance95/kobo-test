import { validateInput } from '../utils';

describe('Product ID is 12-digits; Formatted: XXXX-YYYY-ZZZZ', () => {
  test('Testing Valid Input ', () => {
    const input = '1234-1234-1234';
    expect(validateInput(input)).toEqual(true);
  });

  test('Testing Invalid Input ', () => {
    const input = '1234-1234-555555';
    expect(validateInput(input)).toEqual(false);
  });
});
