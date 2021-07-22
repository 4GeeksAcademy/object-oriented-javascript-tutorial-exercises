# `06` Hello world con classes

Para definir una nueva clase, debes usar la siguiente sintaxis:

```js
class ClassName { 
    constructor(){
        this.myAttribute1 = 'whatever string'; //string 
        this.myAttribute2 = 12; //número entero
    }
    //cualquier función que desees declarar para dicha clase, cualquier
    
    //objecto de este tipo podrá usar esta función 
    function firstClassFunction() { 
        return 'value'; //algo 
    } 
} 
```

## 📝 Instrucciones:

En este ejercicio en particular ( a la izquierda), tienes una clase llamada `Printer`que ya está declarada.

1. Create a new object instance of the class Printer and assign it to a variable called `myPrinter`.

2. Call the function `printerTest` of the class Printer and store the result in a variable called `testResult`

3. Print on the console the variable `testResult` 

### Resultado esperado:

```txt
My brand is Epson and my model TX-200

```
