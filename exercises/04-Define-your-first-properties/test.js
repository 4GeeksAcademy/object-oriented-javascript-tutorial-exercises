const rewire = require("rewire");
let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

test("You should add all the properties in the instructions using camelCase naming convention", function(){
  const file = rewire("./app.js");
  const myFunc = file.__get__('mrBob');
  class Person{
	  constructor(){
      this.name = 'Bob',
      this.lastName = "Dylan",
      this.birthDate = "May 24, 1941"
    }
  } 
  let _output = new Person()
  expect(myFunc).toEqual(_output);
});