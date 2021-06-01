console.log('***** Function Practice *****')
/* NOTES
* A function is a sequence of statements values can be passed to a function, and the function will return a value.
* When JavaScript reaches a 'return' statement, the function will stop executing.

function square(number) {
  return number * number;
}

* 'square' is name of function, 'number' is the PARAMETER
* PARAMETERS are the names listed in the function definition ()
* function consists of one statement that says to return the parameter of the function
  (that is, 'number') multiplied by itself
* defining a function DOES NOT execute it, it must be called,
    example.)    square(5);
* calls the function with an argument of 5, the function executes its statements and returns the value 25
END NOTES */

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
} console.log(hello()); // Call the function to test
/* QUESTION - I was a little caught up on the wording for this question. Which one is correct?
// 1. Function to return 'Hello World!'
  function hello() {
    return console.log('Hello World!');
  } // Call the function to test
  hello();
  */
// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloNameIs(name) { // function is called 'helloName', '(name)' is a parameter
  return 'Hello! My name is ' + name; // function says to return the text, 'Hello,' plus the parameter
  // (defined when we call the funcgtion)
} // Calling the function to test and assinging different values to the '(name)' parameter
console.log('testing function, helloName...');
console.log(helloNameIs('John'));
console.log(helloNameIs('Jacob'));
console.log(helloNameIs('Jingleheimer Schmidt'));
// ALTERNATIVE ANSWER
function helloMyName(name) {
  return console.log('Hello! My name is ' + name);
} // console.log('testing function, helloName..');
helloMyName('Sean Sutter');

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) { // funtion - addNumbers, parameters - firstNumber and secondNumber
   return firstNumber + secondNumber; // return the result of firstNumber + secondNumber
} // console.log('testing function, addNumbers..');
console.log('8340 + 659 = ', addNumbers(8340,659));
// ALTERNATIVE FUNCTION with result variable
function resultNumber (firstNumber, secondNumber ) {
  let result = firstNumber + secondNumber
   return console.log(result);
} // console.log('testing function, resultNumber..' );
console.log('firstNumber + secondNumber = ');
resultNumber(4527,4474);

// 4. Function to multiply three numbers & return the result
function multiplyThree(a, b, c) {
  return a * b * c;
} // console.log('testing function, multiplyThree...');
console.log('3 * 100 * 30 = ', multiplyThree(3, 100, 30));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else
    return false;
} // Call the function to test each outcome (true & false)
// console.log('testing function isPositive...');
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true..', isPositive(3) );
console.log( 'isPositive - should say false..', isPositive(0) );
console.log( 'isPositive - should say false..', isPositive(-3) );
console.log('is the number 10 positive..', isPositive(10));
console.log('is his power level over 9000?', isPositive(9000-9001));

/* I orignally did #6 and #7 wrong, because i defined an array before the function - SEE OLD COMMITS */

// 6. Function to return the _last_ item in an array. If the
//    array is empt2, return `undefined`.
function getLast(array) {
 return console.log(array[array.length - 1]);
} // console.log('last item in array..');
getLast(['Chicken', 'Steak', 'Eggs', 'Pork']);

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function findValue(value, array) {
  for (let i=0; i<array.length; i++) {
    if (array[i]===value)
    return true; // QUESTION - since this is an if statement, why do we need to have 'return true'
  } // end if statement
  return false;
} // end for loop
// console.log('testing function, findValue...');
console.log('is Steak in array', findValue('Steak',['Chicken', 'Steak', 'Eggs', 'Pork']));
console.log('is Fish in array', findValue('Fish',['Chicken', 'Steak', 'Eggs', 'Pork']));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string[0] === letter) {
    return true;
  }
  return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (let i=0; i<array.length; i++) {
    sum += array[i];
  }
  return sum;
} console.log('testing function, sumALL...');
console.log('sum total should be: 4', sumAll([1,1,1,1])); // typed SumALL by mistake and took me forever
console.log('sum total should be: 0', sumAll(10,-9,10,-9));
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array.  If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function checkPos(array) {
  let newArray = [];
  for (let i=0; i<array.length; i++) {
  if (array[i]>0) {
  newArray = [array[i]];
} console.log(newArray);
}} console.log('testing function, checkPos...');
console.log(checkPos([0,-3,-2,8,5,-5,10]));


/* TEST
function checkPositive(array) {
  let newArray = [];
  for (let newArray of array) {
    if (array[i]>0) {
      ;
    }
  }
}
console.log(checkPositive([0,-3,-2,8,5,9]));
console.log(newArray);
*/

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
