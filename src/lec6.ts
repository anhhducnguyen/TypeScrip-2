type Product = {
    id: number;
    name: string;
    count: number;
};

let stores: Product[] = [
    { id: 1, name: "Milk", count: 100 },
    { id: 2, name: "Yakult", count: 100 },
    { id: 3, name: "Butter", count: 100 },
];

let carts: Product[] = [];

function runStore() {
    while (true) {
        let action = prompt("Nhập vào hành động (C/R/U/D/E):")?.toUpperCase();

        if (action === "C") {
            let productName = prompt("Nhập tên sản phẩm muốn mua:");
            let storeItem = stores.find(
                item => item.name.toLowerCase() === productName?.toLowerCase()
            );

            if (storeItem && storeItem.count > 0) {
                let cartItem = carts.find(item => item.id === storeItem.id);

                if (cartItem) {
                    cartItem.count++;
                } else {
                    carts.push({ id: storeItem.id, name: storeItem.name, count: 1 });
                }

                storeItem.count--;
                console.log(`Đã thêm ${productName} vào giỏ hàng.`);
            } else {
                console.log("Sản phẩm không tồn tại hoặc đã hết hàng.");
            }
        } else if (action === "R") {
            console.log("Danh sách sản phẩm trong kho:");
            console.table(stores);

            console.log("Danh sách sản phẩm trong giỏ hàng:");
            console.table(carts);
        } else if (action === "U") {
            let cartIndex = parseInt(prompt("Nhập vị trí sản phẩm cần update trong carts (0-based index):") || "");

            if (cartIndex >= 0 && cartIndex < carts.length) {
                let newCount = parseInt(prompt("Nhập số lượng muốn thay đổi:") || "");
                let cartItem = carts[cartIndex];
                let storeItem = stores.find(item => item.id === cartItem.id);

                if (newCount >= 0 && storeItem && storeItem.count + cartItem.count >= newCount) {
                    storeItem.count += cartItem.count - newCount;
                    cartItem.count = newCount;
                    console.log("Cập nhật thành công!");
                } else {
                    console.log("Số lượng không hợp lệ.");
                }
            } else {
                console.log("Vị trí không hợp lệ.");
            }

            console.log("Cập nhật danh sách sản phẩm:");
            console.table(stores);
            console.table(carts);
        } else if (action === "D") {
            let cartIndex = parseInt(prompt("Nhập vị trí sản phẩm cần xóa trong carts (0-based index):") || "");

            if (cartIndex >= 0 && cartIndex < carts.length) {
                let cartItem = carts[cartIndex];
                let storeItem = stores.find(item => item.id === cartItem.id);

                if (storeItem) {
                    storeItem.count += cartItem.count;
                    carts.splice(cartIndex, 1);
                    console.log("Xóa thành công!");
                }
            } else {
                console.log("Vị trí không hợp lệ.");
            }

            console.log("Cập nhật danh sách sản phẩm:");
            console.table(stores);
            console.table(carts);
        } else if (action === "E") {
            console.log("Cảm ơn bạn đã đến với Rikkei Stores!");
            break;
        } else {
            console.log("Hành động không hợp lệ. Vui lòng nhập C, R, U, D hoặc E.");
        }
    }
}

// Chạy chương trình
runStore();
