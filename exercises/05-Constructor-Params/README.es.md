# `05` Constructor Params

Cada clase tiene una función mágica llamada `constructor`a la cual llamamos cada vez que se crea una nueva instancia de esa clase.

En estos momentos, todos los objetos de la clase `Person` se llaman Bob porque así lo establece el código en la función de la clase `constructor`.

¿Te imaginas un mundo en el que todos nos llamásemos Bob Dylan?

Puedes arreglar esto añadiéndole parámetros en la función del `constructor`de esta forma: 


```js
// puedes definir tantos parámetros (params) como quieras separados por una coma 
constructor(foo1, foo2){
     //código de constructor
}
```

Cada vez que crees una instancies un nuevo objeto de esa clase, podrás hacer lo siguiente:


```js
let aux = new MyClass('bar1, bar2');
```

## 📝 Instructiones:

1. Por favor actualiza el constructor de la clase para permitir que  `name`(nombre), `lastName` (apellido) y `birthDate`(fecha de nacimiento) sean pasados como parámetros, en ese mismo orden.
