//add element 

// let arr = [49, 66, 17, 18, 7, 31, 32]

// let index = 3;

// let value = 45;

// for (let i = arr.length - 1; i >= index; i--) {
//     arr[i + 1] = arr[i];
// }

// arr[index] = value;

// console.log(arr);

// remove element

let arr = [49, 66, 17, 18, 7, 31, 32];

let index = 2;

for (let i = index; i < arr.length; i++) {
    arr[i] = arr[i + 1]
}

arr.length = arr.length - 1;

console.log(arr);
