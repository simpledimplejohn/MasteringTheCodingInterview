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

