# `09` Calculated Property

Some class properties are calculated because you need to run a small algorithm to get their value. For example, a person's age is calculated, because it changes over time. Instead of storing the current age, it's better to store the birthdate and calculate the age every time we want it, with a function like this:

```js
function calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // milliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
```

## 📝 Instructions:

The following class `Person` has the function getAge to calculate a person's age.

1. Please create a new function called `canDrinkAlcohol` that returns a boolean `true` or `false` depending on the person's legal right to drink alcohol.

## 💡 Hint:

- Inside of the `canDrinkAlcohol` function, you can call and use the `getAge` function by writing:
```js

let age = this.getAge()
```

- return true if age is greater than or equal to 21

- return false otherwise
