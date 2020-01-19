'use strict';

const chai = require('chai');
const expect = chai.expect;

describe('Freecodecamp home page', () => {
  it('Verify Freecodecamp home page', () => {
    browser.maximizeWindow();
    browser.url('');
    const title = browser.getTitle();
    expect(title).to.equal('Learn to code | freeCodeCamp.org');
  });
});
