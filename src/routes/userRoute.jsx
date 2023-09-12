import Home_Page from "../Home_Page/HomePage";
import Layout from "../Layout/Layout";
import Login_Page from "../Page/Login_Page/Login_Page";
import Register_Page from "../Page/Register_Page/Register_Page";


import { localUserServ } from "../services/localService";

const isAuthenticated = () => {
    const userInfo = localUserServ.get();
    return userInfo !== null;
}

export const userRoute = [
    {
        path: '/',
        component: <Layout Component={Home_Page} />
    },
    {
        path: '/login',
        component: isAuthenticated() ? <Layout Component={Home_Page} /> : <Layout Component={Login_Page} />
    },
    {
        path: '/register',
        component: isAuthenticated() ? <Layout Component={Home_Page} /> : <Layout Component={Register_Page} />
    },


]