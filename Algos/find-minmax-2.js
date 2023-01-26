let numArray = [22, 33, 2, 1, 6, 3];
function minmax(numArray, start, end) {
    const pivotValue = numArray[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
        if (numArray[i] < pivotValue) {
            [numArray[i], numArray[pivotIndex]] = [numArray[pivotIndex], numArray[i]];
            pivotIndex = pivotIndex + 1;
        }
    }
    [numArray[pivotIndex], numArray[end]] = [numArray[end], numArray[pivotIndex]];
    return pivotIndex;
}
console.log(minmax(numArray, 0, 3));
export {};
