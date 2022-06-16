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
    const navbar = dom.window.document.querySelector('#root > nav');
  test('Does navbar exist', () => {
    expect(navbar.className).toBe('navbar');
  })
})
