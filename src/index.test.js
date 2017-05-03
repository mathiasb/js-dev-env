import {expect} from 'chai';
import fs from 'fs';

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {

  it('should contain the text hello', () => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    const window = new JSDOM(index).window;
    const h1 = window.document.getElementsByTagName('h1')[0];
    expect(h1.innerHTML).to.equal('hello world!');
    window.close();
  });
});
