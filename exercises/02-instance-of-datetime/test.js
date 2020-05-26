const rewire = require("rewire");
let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

it('You should use the console.log function to print the date', function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length).toBe(1);
});

it("You should print on the console today's date with the exact format!", function () {
  let d = new Date(),
  month = '' + (d.getMonth() +1),
  day = '' + d.getDate(),
  year = d.getFullYear();
  let _output = `Today is: ${month}-${day}-${year}`
  expect(_buffer).toMatch(_output);
});