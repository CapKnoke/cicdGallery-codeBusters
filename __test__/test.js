const { JSDOM } = require('jsdom');

describe('dom tests', () => {
  const template = '<!DOCTYPE html><html lang="en"><body><div id="root"></div></body></html>';
  test('one is one', () => {
    expect(1).toBe(1);
  })
})
