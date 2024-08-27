// Exercise 1: Applying `Array.prototype.map()`

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here

const doubledNums = nums.map((num) => num * 2);
console.log(doubledNums);

// Exercise 2: Array destructuring
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const [firstTopping, secondTopping] = pizzaToppings;
console.log(firstTopping);
console.log(secondTopping);

// Exercise 3: Destructuring objects
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
  make: 'Audi',
  model: 'q5',
};

// Your code here
const { make, model } = car;
console.log(make); 
console.log(model); 

// Exercise 4: Applying the spread operator on arrays
// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppings2 = ['Pineapple', 'Olives', 'Anchovies'];

const controversialPizzaToppings = [...pizzaToppings2];

console.log(controversialPizzaToppings);

// Exercise 5: Applying the spread operator on objects

// Duplicate the following object and spread its values into a new variable `myCar`.
// Change the `model` property of `myCar` to 'q7'. Log both objects.

const myCar = { ...car };
myCar.model = 'q7';
console.log(car); 
console.log(myCar);

// Exercise 6: Dynamic keys in objects

// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here

const propertyName = 'username';
const userProfile = {
  [propertyName]: 'maryam',
};
console.log(userProfile);




// Exercise 8: Default parameters
// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here

function describePet(noun = 'cat', adjective = 'white') {
  console.log(`The ${noun} is ${adjective}.`);
}
describePet(); 
describePet('dog', 'black');

// Exercise 9: Ternary operator
// Convert the following `if...else` statement in to a ternary:


let pizza = 'tasty';

if (pizza === 'tasty') {
    console.log('yum');
  } else {
    console.log('yuck');
}

console.log(pizza === 'tasty' ? 'yum' : 'yuck');

// Exercise 10: Boolean gates
// Given variable
const localLangConfig = null;  

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default
const LANG = localLangConfig || 'en';

// result
console.log('Language setting:', LANG);


// Given variable
const userSavedTheme = null;

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default
const USER_THEME = userSavedTheme || 'light';

//result
console.log('User theme setting:', USER_THEME);


//Exercise 11: Optional chaining
const adventurer = {
name: 'Alice',
};
  
// Using optional chaining to safely access non-existent property
let catAge = adventurer.cat?.age;
  
//result
console.log(catAge); 
  