// create a function
function reverse(str) {
    // a store variable for the characters of the string
    let store = "";
    // a (for loop) to loop through the string
    for (let i = 0; i < str.length; i++) {
      // updating the store to place every character of the string in the left side so as to reverse
      store = str[i] + store;
    }
    // returning the final store variable
    return store
  }
  
  // a use case example
  console.log(reverse("Hello Nice To Meet You")) 
  