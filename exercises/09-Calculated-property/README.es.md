# `09` Propiedades calculadas

Algunas de las propiedades de la clase deben calcularse y solo debes ejecutar un pequeño algoritmo para obtener su valor. 

Por ejemplo, la edad de una persona se calcula, porque varía con el tiempo. En vez de guardar la edad actual, es mejor guardar su fecha de nacimiento y calcular su edad cada vez que lo necesitemos, con una función así:

```js
function calculateAge(birthday) { // birthday es la fecha de nacimiento
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); //milisegundos por época
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
```

## 📝 Instrucciones:

La clase `Person` tiene la función `getAge` para calcular la edad de una persona.

1. Crea una función llamada `canDrinkAlcohol` que retorne un booleano `true` o `false` dependiendo del derecho legal de una persona a beber alcohol según su edad.
 
## 💡 Pista:

- Dentro de la función `canDrinkAlcohol`puedes llamar y utilizar la función `getAge`escribiendo:
 ```js
let age = this.getAge()
```
- retorna `true` si la edas es igual o mayor a 21.

- de lo contrario retorna `false`.
