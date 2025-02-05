// find the minimum and maximum values in an array
  function minMax(arr) {
    // Finds the smallest number
    let min = Math.min(...arr); 
    // Finds the biggest number
    let max = Math.max(...arr); 
    // Returns the minimum and maximum numbers
    return [min, max]; 
  }
  
  // a use case sample
  console.log(minMax([2, 4, 1, 9, 5, 8, 3, 26, 78])); 
  