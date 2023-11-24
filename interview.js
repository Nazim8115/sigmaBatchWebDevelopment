// question -1
/*
large Numerric literals are difficult for the human eye to parse quickly , espacially when there are lots of repeting digits. */

// const num1 = 100000;
// const num2 = 100_000;
// console.log(num1 === num2);

// write linear serch in javascript

function binarySearch(arr) {
  let low = 0;
  let data = 1;
  let high = arr.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === data) {
      return mid;
    } else if (arr[mid] < data) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(binarySearch(arr));
