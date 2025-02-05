// function to calculate the factorial of a number 'n'
function factorial(n) {  
    // 0! and 1! are both defined as 1
    if (n === 0 || n === 1) return 1;  
    // initialize result to 1    
    let result = 1; 
    // loop from 'n' down to 1 (decrementing by 1 each time)                          
    for (let i = n; i >= 1; i--) {  
        // Multiply the current result by 'i'            
        result = result * i;                  
    }
    // Return the final calculated factorial
    return result;                            
}
// sample case use
console.log(factorial(4));                     