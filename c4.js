// Array of numbers we want to check
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// Real diesel price in Kenya (KES per litre)
const dieselPrice = 196.63;

// Function to check if a number is prime
function isPrime(num) {
  // Numbers less than 2 are not prime numbers
  if (num < 2) {
    return false;
  }

  // Loop to check if number has divisors
  for (let i = 2; i < num; i++) {
    // If divisible by any number other than 1 and itself
    if (num % i === 0) {
      return false; // not a prime number
    }
  }

  // If no divisors found, it is a prime number
  return true;
}

// Loop through each number in the array
for (let i = 0; i < numbers.length; i++) {
  // Get current number from array
  let currentNumber = numbers[i];

  // Check if number is prime
  if (isPrime(currentNumber)) {
    // If prime, print the number
    console.log(currentNumber + " is Prime");
  } else {
    // If not prime, print diesel price
    console.log(
      currentNumber +
        " is NOT Prime → Diesel price in Kenya is KES " +
        dieselPrice,
    );
  }
}
