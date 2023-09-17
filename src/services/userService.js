import { https } from "./config"

export const userServ = {
    loginUser: (values) => {
        return https.post('/api/Dang-nhap', values);
    },
    registerUser: (userInfo) => {
        return https.post('/api/Dang-ky', userInfo);
    },
    resetPassword: (recovery_password) => {
        return https.post('/api/Khoi-phuc-mat-khau', recovery_password);
    }
}