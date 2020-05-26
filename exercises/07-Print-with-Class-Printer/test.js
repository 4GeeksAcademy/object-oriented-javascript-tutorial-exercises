const rewire = require("rewire");
let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

it("Don't delete the existing console.log", function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length).toBe(1);
});
test("You should create a function called getModel that returns the current printer model", function(){
  const file = rewire("./app.js");
  const myFunc = file.__get__('new Printer');
  expect(myFunc.getModel).toBeTruthy();
});

test("The output in the console should match the one in the instructions", function(){
  const file = rewire("./app.js");
  // const myFunc = file.__get__('mrBob');
  class Printer{
      constructor(){
    	this._brand = 'Epson'; //will be a string 
    	this._model = 'TX-200'; //will be a string 
    }
    printerTest() { 
        return `My brand is ${this._brand} and my model ${this._model}`; 
    } 
    getModel() {
      return this._model
    }
}

    let _epsonPrinter = new Printer();
    let _output = "The model of the printer is: "+ _epsonPrinter.getModel()

    expect(_buffer).toMatch(_output);
});