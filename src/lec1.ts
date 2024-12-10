let listNumber: number[];
listNumber = [5, 12, 8, 10, 25, 7, 30, 3, 14, 9];

function countNumber(arr: number[]) : number{
    const count = arr.filter(num => num >= 10).length;
    return count;
}

let result: number = countNumber(listNumber);
console.log(result);
