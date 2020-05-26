const rewire = require("rewire");
let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

test("You should create a new object instance of the class Printer and assign it to a variable called myPrinter", function(){
  const file = rewire("./app.js");
  const myVar = file.__get__('myPrinter');
  expect(myVar).toBeTruthy();
});

test("You should call the function printerTest of the class Printer and store the result in a variable called testResult", function(){
  const file = rewire("./app.js");
  const myVar = file.__get__('testResult');
  expect(myVar).toBeTruthy();
});

it('You should use the console.log function to print testResult', function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length).toBe(1);
});

test("The output in the console should match the one in the instructions", function(){
  const file = rewire("./app.js");
  // const myFunc = file.__get__('mrBob');
  class Printer{
    
    constructor(){
    	this._brand = 'Epson'; //will be a string 
    	this._model = 'TX-200'; //will be a string 
    }
  
    //Just like printers, this printer has a function that 
    //prints an example text to make sure the printer is working
    printerTest() { 
        return `My brand is ${this._brand} and my model ${this._model}`; 
    } 
}

//Your code here
let myPrinter = new Printer()
let testResult = myPrinter.printerTest()

expect(_buffer).toMatch(testResult);
});