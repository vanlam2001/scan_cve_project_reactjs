import axios from "axios";

const baseUrl = 'http://127.0.0.1:8000/';
const Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

const configHeader = () => {
    return {
        Token: Token
    }
}

export const https = axios.create({
    baseURL: baseUrl,
    headers: configHeader(),
})