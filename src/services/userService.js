import { https } from "./config"

export const userServ = {
    loginUser: (values) => {
        return https.post('/api/Dang-nhap', values);
    },
    registerUser: (userInfo) => {
        return https.post('/api/Dang-ky', userInfo);
    },
}