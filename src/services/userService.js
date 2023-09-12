import { https } from "./config"

export const userServ = {
    loginUser: (values) => {
        return https.post('/api/Dang-nhap', values);
    }
}