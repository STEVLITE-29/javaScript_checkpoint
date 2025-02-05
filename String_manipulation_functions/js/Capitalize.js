// function to capitalize the first letter of each word in a string
function capitalise(str) {
    // split the input string into an array of words using spaces
    let arr = str.split(" "); 
    // an empty array to store capitalized words
    let capStr = [];
    // Iterate through each word in the array
    for (let element of arr) {
        // capitalize first letter and concatenate with the rest of the word
        element = element[0].toUpperCase() + element.slice(1);
        // push the capitalized word into the capStr array
        capStr.push(element);
    }
    
    // Join the capitalized words back into a single string with spaces
    return capStr.join(" ");
} 

// sample use case
console.log(capitalise("i agree that programmers make money"));