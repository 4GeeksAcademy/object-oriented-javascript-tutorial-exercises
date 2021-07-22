# `07` Print with clase `Printer`

La clase `Printer` tiene una función `printerTest`    (tal y como la tienen las impresoras en vida real).

Puedes tener varias funciones dentro de las declaraciones de una clase. De hecho, no hay límites en la cantidad de funciones ¡Puedes tener tantas como quieras! Solo tienes que declarar las nuevas funciones en cualquier lugar siempre que sea dentro del alcance de la clase (dentro de sus llaves) como un pariente de las otras funciones, de esta forma:


```js
class MyClass{
   myFirstFunction(){
      // contenido de la función
   }
   mySecondFunction(){
      // contenido de la función
   }
   myThirdFunction(){
      // contenido de la función
   }
   ...
}
```

## 📝 Instrucciones:

1. Por favor escribe una segunda función llamada `getModel` que retorne/devuelva el modelo de la impresora actual.

## 💡 Pista:

+ Declara la nueva función dentro de la clase `Printer`.

+ La función debe retornar el contenido de la variable `_model`.


## Resultado esperado:


```txt
The model of the printer is: TX-200

```