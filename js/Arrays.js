// Very small and very effecient
// lookup O(1)
// push O(1)
// pop O(1) add to the end of the array
// insert O(n)
// delete O(n)
// not good for adding to the beginning

// making an array from scratch 
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index]
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length -1];
    delete this.data[this.length-1]
    this.length--
    return lastItem
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }
  shiftItems(index) {
    for(let i = index; i < this.length - 1 ; i ++) {
      this.data[i] = this.data[i+1];
    }
    this.data[this.length-1]
  }
}

const newArray = new MyArray();
console.log(newArray.get(0))
newArray.push("hi")
newArray.pop()