// Bubble Sort Alog:
// A sorting algorithm where the largest value bubble up at the top...

function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        console.log(i);
        let isSwapped;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isSwapped = true;
            }
        }
        if(!isSwapped){
            break;
        }
    }
    return arr;
}

// const result = bubbleSort([5, 3, 4, 1, 2, 8, 6, 7]);
const result = bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
console.log(result);


