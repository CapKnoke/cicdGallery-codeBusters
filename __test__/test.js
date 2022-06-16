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
  describe('The Navbar', () => {
    const navbar = dom.window.document.querySelector('#root > nav');
    test('nav element exists and has class "navbar"', () => {
      expect(navbar.className).toBe('navbar');
    });
    test('navbar has 1 child with class logo-container', () => {
      expect(navbar.firstChild.className).toBe('logo-container');
    });
    test('logo container contains title of type "h1"', () => {
      expect(navbar.firstChild.childNodes[0].nodeName).toBe('H1');
    });
    test('logo container contains logo image', () => {
      expect(navbar.firstChild.childNodes[1].nodeName).toBe('IMG')
    });
  });
  describe('The Search Field', () => {
    const searchField = dom.window.document.querySelector('#root > form');
    test('search field exists and has class "search-form"', () => {
      expect(searchField.className).toBe('search-form');
    });
    test('form has 4 children', () => {
      expect(searchField.childNodes.length).toBe(4);
    });
  });
  describe('The Main Content', () => {
    const sections = dom.window.document.querySelectorAll('#root > section');
    test('gallery exists and is the first section element on the page', () => {
      expect(sections[0].className).toBe('gallery');
    });
    describe('The Button Container', () => {
      test('button-container exists and is the second section element', () => {
        expect(sections[1].className).toBe('button-container');
      });
      test('button-container has two children', () => {
        expect(sections[1].childNodes.length).toBe(2);
      });
      test('child nodes are buttons', () => {
        expect(sections[1].childNodes[0].nodeName).toBe('BUTTON');
        expect(sections[1].childNodes[1].nodeName).toBe('BUTTON');
      });
      test('buttons have class "button-container__button', () => {
        expect(sections[1].childNodes[0].className).toBe('button-container__button');
        expect(sections[1].childNodes[1].className).toBe('button-container__button');
      });
    });
    describe('The Footer Element', () => {
      test('footer exists and is the third section element', () => {
        expect(sections[2].className).toBe('footer');
      });
      test('footer contains a link', () => {
        expect(sections[2].firstChild.nodeName).toBe('A');
      });
      test('link has class "footer-link"', () => {
        expect(sections[2].firstChild.className).toBe('footer__link');
      });
      test('link contains an image', () => {
        expect(sections[2].firstChild.firstChild.nodeName).toBe('IMG');
      });
      test('link image has class "footer__link--image"', () => {
        expect(sections[2].firstChild.firstChild.className).toBe('footer__link--image');
      });
    });
  });
});
