import Home_Page from "../Home_Page/HomePage";
import Layout from "../Layout/Layout";
import Login_Page from "../Page/Login_Page/Login_Page";
import Register_Page from "../Page/Register_Page/Register_Page";

export const userRoute = [
    {
        path: '/',
        component: <Layout Component={Home_Page} />
    },
    {
        path: '/login',
        component: <Layout Component={Login_Page}></Layout>
    },
    {
        path: '/register',
        component: <Layout Component={Register_Page}></Layout>
    },

]