// ==== Callbacks ====

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

/**
 * 
 * @param
 */
const consume = (firstParam, secondParam, callback) => {
	if (typeof callback === 'function') {
		return callback(firstParam, secondParam);
	}

	throw new Error('Callback must be a function');
};

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

const add = (numeOne, numTwo) => numeOne + numTwo;
const multiply = (numeOne, numTwo) => numeOne * numTwo;

const greeting = (firstName, lastName) => {
	return `Hello ${firstName} ${lastName}, nice to meet you!`;
};

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume('Mary', 'Poppins', greeting)); // Hello Mary Poppins, nice to meet you!
// console.log(consume(4, 4, 'error'));

// ==== Closures ====

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation:

/*
 * This behaviour in Javascript is called closure: nestedfunction() was able to access the internal variable because it was declared in the main function myFunction() which is the outer scope within which the nestedfunction() function was declared and closure rule says we can access `Local own declare variables` `outer scope (variables) of the function within which the function was defined` `global scope which is the window object within the browser`
*/

const external = "I'm outside the function";

function myFunction() {
	console.log(external);
	const internal = "Hello! I'm inside myFunction!";

	function nestedFunction() {
		console.log(internal);
	}
	nestedFunction();
}
myFunction();
