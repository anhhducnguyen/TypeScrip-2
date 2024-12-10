function twoSum(nums: number[], target: number): number[] {
    // Khởi tạo hashmap để lưu giá trị và chỉ số tương ứng
    const numMap: { [key: number]: number } = {};
    // Duyệt qua mảng nums
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num; // Tìm giá trị còn thiếu để đạt target
        // Kiểm tra nếu giá trị còn thiếu đã có trong hashmap
        if (complement in numMap) {
            // Nếu có, trả về chỉ số của giá trị trong hashmap và chỉ số hiện tại
            return [numMap[complement], i];
        }
        // Nếu chưa, thêm giá trị và chỉ số hiện tại vào hashmap
        numMap[num] = i;
    }
    // Trả về rỗng nếu không tìm thấy
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));      // Output: [1, 2]
console.log(twoSum([3, 3], 6));         // Output: [0, 1]
