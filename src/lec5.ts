let a: number[][] = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
];

function PrintArray(arr: number[][]): void {
    for (let i: number = 0; i < arr.length; i++) {
        let row = "";
        for (let j: number = 0; j < arr[i].length; j++) {
            row += arr[i][j];
            if (j < arr[i].length - 1) {
                row += ", ";
            }
        }
        console.log(row);
    }
}

PrintArray(a);