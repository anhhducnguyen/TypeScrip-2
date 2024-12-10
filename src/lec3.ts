const inputArray3: number[] = [12, 5, 23, 7, 8, 19, 25, 3, 11, 1];


function ReverseArray(arr: number[]): number[] {
    let subArray: number[] = [];
    for (let i: number = arr.length - 1; i >= 0; i --) {
        subArray.push(arr[i]);
    }
    return subArray;
}

let arr: number[] = ReverseArray(inputArray3);
console.log(arr);
