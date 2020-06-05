const rewire = require("rewire");
const fs = require("fs");
const path = require("path");
let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");
const appContent = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');

test("Use the 'class' statement and 'Person' capitalized", function(){
  let reg = /.*class(\s+)Person/;
  expect(reg.test(appContent)).toBeTruthy();
});

test("You should create a class called Person", function(){
  const file = rewire("./app.js");
  const myFunc = file.__get__('Person');
  expect(myFunc).toBeTruthy();
});

test("Person should be a class", function(){
  const file = rewire("./app.js");
  const myFunc = file.__get__('Person');
  expect(typeof(myFunc)).toBe('function');
});