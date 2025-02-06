function isItPrime(n) {                          
    // Loop from 2 to the square root of n
    for (let i = 2; i <= Math.sqrt(n); i++) {   

        // If n is divisible by i, it is NOT a prime number
        if (n % i === 0) {                       
            return "No! It's not a prime number"; // Return a message indicating n is not prime
        }
    }

    // If no divisors were found, n is prime
    return "Yes! It's a prime number";           
}

// Call the function and print the result for 37
console.log(isItPrime(37)); // Expected output: "Yes! It's a prime number"
