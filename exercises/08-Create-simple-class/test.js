const rewire = require("rewire");
let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

it("Don't delete the existing console.log", function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length).toBe(3);
});


test("The output in the console should match the one in the instructions", function(){
  const file = rewire("./app.js");
  class Counter{
	constructor(){
		this.counter = 0;
	}
	increaseOne(){
    return this.counter += 1
	}
	decreaseOne(){
    return this.counter -= 1
	}
	getValue(){
    return this.counter
	}	
}

    let myNewCounter = new Counter();
    let _output = []
    myNewCounter.increaseOne();
    let _outputOne = myNewCounter.getValue();
    _output.push(_outputOne)
    myNewCounter.increaseOne();
    myNewCounter.increaseOne();
    let _outputTwo = myNewCounter.getValue();
    _output.push(_outputTwo)
    myNewCounter.decreaseOne();
    myNewCounter.decreaseOne();
    let _outputThree = myNewCounter.getValue();
    _output.push(_outputThree)
    // expect(_buffer).toEqual(_outputOne+_outputTwo+_outputThree);
    expect(_buffer).toMatch(_output.map(n => n).join("\n"));
});