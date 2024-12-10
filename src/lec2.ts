const inputArray: number[] = [12, 5, 23, 7, 8, 19, 25, 3, 11, 1];


function findMinMax(arr: number[]): void {
    if (arr.length !== 10) {
        console.log("Nhap lai");
        return;
    }

    let max = arr[0];
    let min = arr[0];

    let maxIndex = 0;
    let minIndex = 0;

    for (let i: number = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            maxIndex = i;
        }

        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
    }
    console.log(`Phần tử lớn nhất là ${max}, tại vị trí ${maxIndex}`);
    console.log(`Phần tử nhỏ nhất là ${min}, tại vị trí ${minIndex}`);
}

findMinMax(inputArray);