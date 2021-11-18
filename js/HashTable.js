/*
hash function?
indepotent function given an input always outputs the same output
hash generates a hash number that gets turned into a key
insert O(1)
lookup O(1)
delete O(1)
search O(1)
Have no order
getting keys O(n) because you have to loop

PROBLEMS:
Collision of hashes who get the same spot of memory
creates a sub list to store the data
which is O(n)


*/

const a = new Map()
const b = new Set() //lets you store data in order

//chalenge which item gets repeated?

let testArray = [2,5,1,2,3,5,1,2,4] //return 2

function findDuplicate(array) {
  for(let i = 0; i < array.length; i ++) {
    for(let j = i + 1; j < array.length; j ++) {
      if(array[i] === array[j]) {
        return array[i]
      }
    }
  }
  return undefined
}
// console.log(findDuplicate(testArray));

function usingHashTables(array) {
  let hashObject = {};
  for(let i = 0; i < array.length; i ++) {
    
    if (hashObject[array[i]] !== undefined) { //if something exists at hashObject[key] === array[i] then done
      return array[i]
    } else {
      hashObject[array[i]] = i // else add something to the key at possition i
    }
    console.log(hashObject)
  }
  return undefined
}
console.log(usingHashTables(testArray))


