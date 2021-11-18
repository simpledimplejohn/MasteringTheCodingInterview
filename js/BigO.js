// O(n) means linear 
// O(10000)
// proportional
const nemo = "nemo";

const largeArray = new Array(10000).fill('nemo');

function findNemo(array) {
  for(let i = 0; i < array.length; i ++) {
    if(array[i] === "nemo") {
      console.log(`found nemo number ${array[i]}`)
    }
  }
}
// findNemo(largeArray)

// CONSTANT TIME:
// O(1)  only doing one thing
// O(10) still small

// Big O Math

function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)
  for (let i = 0; i < input.length; i++) { // O(n)
    anotherFunction();  // O(n)
    let stranger = true; //O(n)
    a++; // O(n)
  }
  return a; // O(1)
}

// O(3+4n)

// RULE #1 
// We always look at the worst case scenario 
// RULE #2
// Remove constants 
// Above is rounded to O(n)
// RULE #3
// different terms for inputs
// O( n + n )
function copressBoxesTwice(boxes, boxes2) {
  boxes.array.forEach(element => {
    console.log(boxes[element]);
  });
  boxes2.forEach(element => {
    console.log(boxes2[element]);
  });
};
// RULE #4 
// Drop non dominate terms

// O(!) 
// Factorial, the worst
// each input is another nested loop

/////////SPACE COMPLEXITY

//heap holds variables
//stack keeps track of function calls
// What Causes Space Complexity:
// - Variables
// - Data Structures
// - function calls
// - Allocations

function booooooo(n) {
  for(let i = 0; i < n.length; i++) {
    console.log('boooo!');
  }
}
booooooo([1,2,3,4,5]);
// space complexity of O(n)

function arrayOfThings(n) {
  let newArray = [];
  for (let i = 0; i < n.length; i++) {
    newArray[i] = 'stuff'
  }
  return newArray
}
// O(n) for memeory because you are creating a new datastructure

