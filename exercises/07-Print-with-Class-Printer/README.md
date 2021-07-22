# `07` Print with `Printer`class

The given Printer class has one function `printerTest` (just like the test in real-life printers). 
You can have several functions inside class declarations; actually, there is no limit to the number of functions you can have! You declare the new functions anywhere inside the class scope (between its curly brackets) as a sibling of the other functions like this:

```js
class MyClass{
   myFirstFunction(){
      // function content
   }
   mySecondFunction(){
      // function content
   }
   myThirdFunction(){
      // function content
   }
   ...
}
```


## 📝 Instructions:

1. Please write a second function called `getModel` that returns the current printer model.


## 💡 Pista:

+ Declare the new function inside the class `Printer`.

+ The function needs to return the content of the `_model` variable.

## Expected result:

```txt
The model of the printer is: TX-200

```