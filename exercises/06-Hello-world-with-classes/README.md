# `06` Hello world with classes

To define a new class, you have to use the following syntax:

```js
class ClassName { 
    constructor(){
        this.myAttribute1 = 'whatever string'; //string 
        this.myAttribute2 = 12; //integer 
    }
    //any function you want to declare for the class, every
    //object of this type will be able to use this function
    function firstClassFunction() { 
        return 'value'; //something 
    } 
} 
```

In this particular exercise (on the left), you have a class called `Printer` already declared.

## 📝 Instructions

- Create a new object instance of the class Printer and assign it to a variable called `myPrinter`.

- Call the function `printerTest` of the class Printer and store the result in a variable called `testResult`

- Print on the console the variable `testResult` 

### Expected result:

```txt
My brand is Epson and my model TX-200

```
