class Printer{
    
    // You can add new functions here, HOWEVER- we would prefer you didn't.
    // It is a good practice to have the constructor listed first.
    
    constructor(){
    	this._brand = 'Epson'; //will be a string 
    	this._model = 'TX-200'; //will be a string 
    }
    
    //you can add new functions here
  
    printerTest() { 
        return `My brand is ${this._brand} and my model ${this._model}`; 
    } 
    
    //you can add new class functions here
}

let epsonPrinter = new Printer();
console.log("The model of the printer is: "+epsonPrinter.getModel());