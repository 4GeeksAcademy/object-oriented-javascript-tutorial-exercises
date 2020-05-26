const rewire = require("rewire");
let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");


test("You should update the constructor to allow the name, lastName and birthDate to be passed as a parameter.", function(){
  const file = rewire("./app.js");
  const _maryInstance = file.__get__('mary');
  const _julyInstance = file.__get__('july');
 class Person{
	constructor(name, lastName, birthDate){
		this._name = name;
		this._lastName = lastName;
		this._birthDate = birthDate;
	}
}
  let _outputMary = new Person('Mary','Dylan','Oct 12, 2002')
  let _outputJuly = new Person('July','Mccafee','Nov 12, 2002');
  expect(_maryInstance).toEqual(_outputMary);
  expect(_julyInstance).toEqual(_outputJuly);
});