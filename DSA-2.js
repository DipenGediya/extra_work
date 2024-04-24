// bubble sorting
let arr = [49, 66, 17, 18, 7, 31, 32];

// for (let i = 0; i < arr.length; i++) {

//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] > arr[j+1]) {
//             let temp = arr[j];
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//             flag = true
//         }
//     }
// }

// console.log(arr);

// linear search

// let element = 17;

// for (let i = 0; i < arr.length; i++) {
//     if (element == arr[i]) {
//         console.log("Number found");
//     }
// }

// selection sort

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}

console.log(arr);