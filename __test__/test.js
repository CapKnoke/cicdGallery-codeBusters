const { JSDOM } = require('jsdom');
const fs = require('fs');

describe('dom tests', () => {
  const script = fs.readFileSync('./dist/main.bundle.js');
  const template = `<!DOCTYPE html>
    <html lang="en">
    <body>
      <div id="root"></div>
      <script>${script.toString()}</script>
    </body>
    </html>`;
    const dom = new JSDOM(template, {
      runScripts: "dangerously",
      url: "https://example.org/",
    });
    test('Has Navbar', () => {
      const navbar = dom.window.document.querySelector('#root > nav');
      expect(navbar.className).toBe('navbar');
    });
    test('Has search field', () => {
      const searchField = dom.window.document.querySelector('#root > form');
      expect(searchField.className).toBe('search-form');
    });
    test('Has gallery', () => {
      const gallery = dom.window.document.querySelector('#root > section');
      expect(gallery.className).toBe('gallery');
    });
})
