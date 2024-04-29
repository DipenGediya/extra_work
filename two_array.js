let array = [49, 17, 7, 21, 66, 45];
let firstArray = []
let secondArray = []
let margeArray = []

let mid_index;

if (array.length % 2 == 0) {
    mid_index = array.length / 2
}
else {
    mid_index = array.length / 2 + 0.5
}

console.log(mid_index);

for (let i = 0; i < mid_index; i++) {
    firstArray[i] = array[i]
}

console.log(`First array = ${firstArray}`);

let temp = 0
for (let i = mid_index; i < array.length; i++) {
    secondArray[temp] = array[i];
    temp++
}

console.log(`Second array = ${secondArray}`);

for (let i = 0; i < firstArray.length; i++) {
    margeArray[i] = firstArray[i]   
}

for (let i = 0; i < secondArray.length; i++) {
    margeArray[temp] = secondArray[i]
    temp++   
}

console.log(`Marge Array = ${margeArray}`);