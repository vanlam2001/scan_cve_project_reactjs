export const USER_INFO = "USER_INFO";
export const localUserServ = {
    // khởi tạo object gồm các phương thức liên quan tới user và localstorage
    get: () => {
        // lấy dữ liệu từ localstorage lên -> đổ vào headerInfo 
        let jsonData = localStorage.getItem(USER_INFO);
        // return jsonData ? JSON.parse(jsonData) :""
        if (jsonData != "" && jsonData != "undifined") {
            return JSON.parse(jsonData) ? JSON.parse(jsonData) : null;
        }
    },
    set: (userInfo) => {
        // sau khi login thành công -> lưu userInfo xuống localStorage
        let jsonData = userInfo ? JSON.stringify(userInfo) : "";
        localStorage.setItem(USER_INFO, jsonData);
    },
    remove: () => {
        // sau khi người dùng đăng xuất -> xóa userInfo ở localStorage
        localStorage.removeItem(USER_INFO);
    }
}
