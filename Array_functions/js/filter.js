// function to filter out string elements from an array
function filter(arr) {
    // initialize an empty array to store non-string elements
    let result = []; 
    // loop through each element in the input array
    for (let i = 0; i < arr.length; i++) {
        // check if the current element is NOT of type 'string'
        if (typeof arr[i] !== "string") {
            // if it's not a string, add it to the result array
            result.push(arr[i]);
        }
    }
    // return the new array containing only non-string elements
    return result; 
}

// sample use case
console.log(filter([7, "hannah", 3, "hello", 10, "world", true, 20, "python", 30]));
