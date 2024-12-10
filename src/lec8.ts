function isValid(s: string): boolean {
    const stack: string[] = [];
    const map: { [key: string]: string } = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (const char of s) {
        // Nếu là dấu đóng ngoặc
        if (char in map) {
            const topElement = stack.length > 0 ? stack.pop() : null; // Lấy đỉnh của stack
            if (topElement !== map[char]) {
                return false; // Không khớp với ngoặc mở
            }
        } else {
            // Nếu là dấu mở ngoặc
            stack.push(char);
        }
    }

    // Stack phải rỗng nếu hợp lệ
    return stack.length === 0;
}

console.log(isValid("()"));       // Output: true
console.log(isValid("()[]{}"));   // Output: true
console.log(isValid("(]"));       // Output: false
console.log(isValid("([)]"));     // Output: false
console.log(isValid("{[]}"));     // Output: true
