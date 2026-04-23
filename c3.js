// We start a loop that goes from 1 to 50
for (let i = 1; i <= 50; i++) {
  // Check FIRST: if number is divisible by BOTH 3 and 5
  // We do this first because it's the most specific condition
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz"); // print FizzBuzz for multiples of 3 and 5

    // Check if number is divisible by 3 only
  } else if (i % 3 === 0) {
    console.log("Fizz"); // print Fizz for multiples of 3

    // Check if number is divisible by 5 only
  } else if (i % 5 === 0) {
    console.log("Buzz"); // print Buzz for multiples of 5

    // If none of the above conditions are true
  } else {
    console.log(i); // print the number itself
  }
}
