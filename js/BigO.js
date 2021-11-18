// O(n) means linear 

const nemo = "nemo";

const largeArray = new Array(10000).fill('nemo');

function findNemo(array) {
  for(let i = 0; i < array.length; i ++) {
    if(array[i] === "nemo") {
      console.log(`found nemo number ${array[i]}`)
    }
  }

}
findNemo(largeArray)