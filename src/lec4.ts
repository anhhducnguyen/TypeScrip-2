let inputArray4: number[] = [12, 5, 23, 7, 8, 19, 25, 3, 11, 1];

function sortArray(arr: number[]): number[] {
    for (let i: number = 0; i < arr.length; i++) {
        for (let j: number = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
}

const sortedArray = sortArray(inputArray4);
console.log(sortedArray);
