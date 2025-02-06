function fibb(n) {                           
    //if n is 0, return 0
    if (n === 0) return 0;                   
    //if n is 1, return 1
    if (n === 1) return 1;                   
    //an array with the first two Fibonacci numbers
    let all = [0, 1];                        
    //start loop from index 2 up to 'n'
    for (let i = 2; i <= n; i++) {           
        //compute the next Fibonacci number and add it to the array
        all.push(all[i - 1] + all[i - 2]);   
    }
    //return the full Fibonacci sequence up to 'n'
    return all;                              
}

//sample use case
console.log(fibb(9));                        
