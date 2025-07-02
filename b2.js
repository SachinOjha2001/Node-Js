const math=require('./b1.js');
// Example of Module Import from b1.js
console.log("Sum=",math.sum(5, 10)); // Output: 15
console.log(math.multiply(5, 10)); // Output: 50    
console.log(math.divide(10, 2)); // Output: 5
console.log(math.subtract(10, 5)); // Output: 5
console.log(math.g); // Output: 9.81
console.log(math.PI); // Output: 3.14159    
// Example of Module Import in Node.js
// console.log(math); // Output: { sum: [Function: sum], multiply: [Function: multiply], divide: [Function: divide], subtract: [Function: subtract], g: 9.81, PI: 3.14159 }