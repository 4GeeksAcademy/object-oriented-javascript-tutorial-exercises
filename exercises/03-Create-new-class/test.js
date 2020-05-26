const rewire = require("rewire");
let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

test("You should create a class called Person", function(){
  const file = rewire("./app.js");
  const myFunc = file.__get__('Person');
  expect(myFunc).toBeTruthy();
});