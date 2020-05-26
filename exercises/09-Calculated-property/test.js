const rewire = require("rewire");
let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

it("Don't delete the existing console.log", function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length).toBe(1);
});

test("You should create a function called canDrinkAlcohol", function(){
  const file = rewire("./app.js");
  const myFunc = file.__get__('new Person');
  expect(myFunc.canDrinkAlcohol).toBeTruthy();
});

test("The console should print true", function(){
  const file = rewire("./app.js");
  class Person{
	//the constructor receives 3 params
	constructor(year, month, date){
		this._birthday = new Date(year, month, date);
	}
	
	getAge() { // birthday is a date
	    let ageDifMs = Date.now() - this._birthday.getTime();
	    let ageDate = new Date(ageDifMs); // milliseconds from epoch
	    return Math.abs(ageDate.getUTCFullYear() - 1970);
	}
	
	canDrinkAlcohol(){
		//your code here
    if (this.getAge() >= 21 ){
      return true
    }
    else{
      return false
    }
	}
}

let mario = new Person(1985, 10, 20);
let _output = []
let _outputDrink = mario.canDrinkAlcohol();
_output.push(_outputDrink)
// expect(_buffer).toEqual(_output)
    // expect(_buffer).toEqual(_outputOne+_outputTwo+_outputThree);
    expect(_buffer).toMatch(_output.map(n => n).join("\n"));
});