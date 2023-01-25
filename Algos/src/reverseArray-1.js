//Reverse array
let newArray = [2, 3, 4, 5, 6, 7, 8, 9];
let reverseArray = [];
for (let i = newArray.length - 1; i > -1; i--) {
    reverseArray.push(newArray[i]);
}
console.log(reverseArray);
export {};
