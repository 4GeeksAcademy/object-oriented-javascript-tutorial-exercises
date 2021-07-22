# `05` Constructor Params

Every class comes with a magic function called `constructor` that gets called whenever a new instance of that class is created.

Right now, all objects of the class `Person` will be named Bob because it is hard-coded on the `constructor` function that way. 

Can you imagine a world where everyone is named Bob Dylan?

You can fix that by allowing parameters in the function `constructor` like this:

```js
//you can define as many params as you like separated by comma
constructor(foo1, foo2){
     //constructor code
}
```

Whenever you are instantiating a new object of that class, you will be able to do the following:

```js
let aux = new MyClass('bar1, bar2');
```

## 📝 Instructions

Please update the constructor of the class to allow the `name`, `lastName` and `birthDate` to be passed as a parameter, in that same order.
