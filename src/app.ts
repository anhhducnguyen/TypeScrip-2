// Array - Mảng (Danh sách)

// Danh sách số
let numberList: number[];

numberList = [10, 20, 30];

numberList = [10, 20, 30];

// Danh sách các sinh viên
let studentList: string[];

studentList = ["Nguyen Van A", "Tran Van B", "Ta Van C"];

// Danh sách số điện thoại
let phoneList: Array<string>; // string[]

phoneList = ["0973712323", "0981855512", "0985124542"];

let randomArr: any[];
randomArr = ["123", 123, true, false];

// Hàm xây dựng sẵn để thao tác với mảng

// Read - Lấy phần tử có ở trong mảng
// Read one - Lấy 1 phần tử
studentList[0]; // "Nguyen Van A";

// Read all - Lấy toàn bộ phần tử có trong mảng
// - Duyệt qua toàn bộ phần tử có trong mảng
// - C1: Sử dụng for truyền thống
for (let i: number = 0; i < studentList.length; i++) {
  console.log(studentList[i]);
}
// - C2: Sử dụng vòng lặp for...of
// -> Lấy ra toàn bộ phần tử có trong mảng (Không quan tâm đến chỉ số
// của những phần tử có trong mảng)
for (let student of studentList) {
  console.log(student);
}
// - C3: Sử dụng vòng lặp for...in
// -> Lấy ra toàn bộ phần tử có trong mảng (Làm việc được với toàn bộ
// chỉ số của các phần tử có trong mảng)
for (let index in studentList) {
  console.log(index, studentList[index]);
}

// Create - Thêm mới
// - Thêm phần tử vào đầu mảng (.unshift)
// - Thêm phần tử vào cuối mảng (.push)
studentList.push("Le Van D");
console.log(studentList);
// - Thêm phần tử vào vị trí bất của mảng (splice)

// Update - Cập nhật
studentList[0] = "Nguyen Van Peter";

// Delete - Xoá
// Xoá đầu (.shift)
studentList.shift();
console.log(studentList);
// Xoá cuối (.pop)
// Xoá tại vị trí bất kỳ (.splice)

// Object - Đối tượng
type Person = {
  name: string;
  age: number;
  hobbies: string[];
  gender: boolean;
};

let person: Person = {
  name: "Nguyen Van A",
  age: 18,
  hobbies: ["Going out", "Reading books"],
  gender: true,
};

// Danh sách những đối tượng
// Danh sách sinh viên(id, name, age)

let students: {
  id: number;
  name: string;
  age: number;
}[] = [
  {
    id: 1,
    name: "Nguyen Van A",
    age: 18,
  },
  {
    id: 2,
    name: "Nguyen Van B",
    age: 19,
  },
];

// Tuple - MẢNGGGGG cố định độ dài và kiểu dữ liệu của từng phần tử
let roles: [string, string, string];
roles = ["ADMIN", "MODERATOR", "USER"];

console.log(roles[1]);

for (let role of roles) {
  console.log(role);
}

// TRÁNH SỬ DỤNG CÁC THAO TÁC THÊM, XOÁ phần tử trong 1 tuple

// Enum - Kiểu dữ liệu gần giống đối tượng

enum Role {
  ADMIN = 10, // 0
  MODERATOR, // 11
  USER, // 12
}

console.log(Role.ADMIN);
console.log(Role.MODERATOR);
console.log(Role.USER);

let role = {
  ADMIN: 0,
  MODERATOR: 1,
  USER: 2,
};

// Đa ngôn ngữ
enum Language {
  hello = "xin chào",
  language = "ngôn ngữ",
}
console.log(Language);

// Type Alias (type)

type randomValueType = string | number | boolean;

// Union Type
// Biến randomValue --> nhận các giá trị là string, number, boolean
let randomValue: randomValueType;

randomValue = "Hello world";

randomValue = 123;

randomValue = false;

// Function type
function sum(number1: number, number2: number): number {
  return number1 + number2;
}

// JS + TS --> Tính chất First-class function
// - Một function trong JS có thể nhận 1 function khác làm tham số

// VD: phương thức map của mảng
// - Ánh xạ các phần tử trong mảng theo 1 công thức nào đó

let numbers: number[] = [10, 20, 30, 40, 50];

let newArr: number[] = numbers.map(function (element, index) {
  return element * element;
});

console.log(newArr);

// Mô phỏng lại phương thức map trong Javascript

function map(
  arr: number[],
  fn: (element: number, index: number) => number
): number[] {
  let result: number[] = [];
  for (let i in arr) {
    let mapElement: number = fn(arr[i], +i);
    result.push(mapElement);
  }
  return result;
}

let resultArr = map([3, 5, 7, 9, 11], function (element, index) {
  return element * element;
});

console.log(resultArr);