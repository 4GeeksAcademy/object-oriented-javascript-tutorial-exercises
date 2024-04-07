class Counter{
	constructor(){
		//initialization of the counter variable
		this.counter = 0
		
	}
	increaseOne(){
		//increase the value in one
		this.counter += 1
	}
	decreaseOne(){
		//decrease the value in one
		this.counter -= 1
	}

	getValue(){
		//return the value
		return this.counter
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

