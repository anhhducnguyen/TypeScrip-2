function isPalindrome(s: string): boolean {
    // Bước 1: Làm sạch chuỗi - loại bỏ ký tự không hợp lệ, chuyển về chữ thường
    const cleanedString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // Bước 2: So sánh chuỗi đã làm sạch với chuỗi đảo ngược
    const reversedString = cleanedString.split("").reverse().join("");

    return cleanedString === reversedString;
}

console.log(isPalindrome("racecar"));     // Output: true
console.log(isPalindrome("raceacar"));    // Output: false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("No 'x' in Nixon"));               // Output: true
console.log(isPalindrome("Hello, world!"));                 // Output: false
