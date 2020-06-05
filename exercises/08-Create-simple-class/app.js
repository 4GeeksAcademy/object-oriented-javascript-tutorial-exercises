class Counter{
	constructor(){
		//initialization of the counter variable
		
	}
	increaseOne(){
		//increase the value in one
	}
	decreaseOne(){
		//decrease the value in one
	}
	getValue(){
		//return the value
	}	
}

let myNewCounter = new Counter();
myNewCounter.increaseOne();
console.log(myNewCounter.getValue());
myNewCounter.increaseOne();
myNewCounter.increaseOne();
console.log(myNewCounter.getValue());
myNewCounter.decreaseOne();
myNewCounter.decreaseOne();
console.log(myNewCounter.getValue());

