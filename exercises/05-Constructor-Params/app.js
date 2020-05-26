class Person{
	constructor(){
		this._name = 'Bob';
		this._lastName = 'Dylan';
		this._birthDate = 'May 24, 1941';
	}
}

//do not edit below this line

let mary = new Person('Mary','Dylan','Oct 12, 2002');
console.log("Mary's instance contains:",mary);

let july = new Person('July','Mccafee','Nov 12, 2002');
console.log("July's instance contains:",july);

let testFunction = (a,b,c) => new Person(a,b,c);