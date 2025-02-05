// function to sum all values of an array
function sumAll(arr) {
    // declaring the sum variable
    let sum = 0;
    // looping through the array
    for (const i in arr) {
        // updating sum array to add values one by one
        sum += arr[i];
    }
    // returning the total sum
    return sum;
} 

// a use case sample
console.log(sumAll([2, 4, 1, 9, 15, 8, 3, 26, 78]));