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
} // Call the function to test
console.log(hello());
/* QUESTION - I was a little caught up on the wording for this question. Which one is correct?

  // 1. Function to return 'Hello World!'
  function hello() {
    return console.log('Hello World!');
  } // Call the function to test
  hello();

END QUESTION */

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) { // function is called 'helloName', '(name)' is a parameter
  return 'Hello! My name is ' + name; // function says to return the text, 'Hello,' plus the parameter (defined when we call the funcgtion)
} // Calling the function to test and assinging different values to the '(name)' parameter
console.log('testing function, helloName..');
// console.log(`Testing function helloName... ${helloName()}`);
console.log(helloName('Jo'));
helloName('Stacy');
/*
// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) { // function is called 'helloName', '( name )' is a parameter
  return console.log('Hello,', name);
}
// Remember to call the function to test
console.log(helloName(Jo));
*/
// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber ) {
  // return firstNumber + secondNumber;
}


// 4. Function to multiply three numbers & return the result
function multiplyThree( ){

}


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return;
  }
    return;
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {

}

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){

}

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
