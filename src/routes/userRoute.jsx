
import Scan_CVE_2017_5487 from "../Components/Scan_CVE_2017_5487/Scan_CVE_2017_5487";
import Scan_Telerik from "../Components/Scan_Telerik/Scan_Telerik";
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
    {
        path: '/scan-cve-2017-9248',
        component: localUserServ.get()?.maLoaiNguoiDung === 'user'
            ? <Layout Component={Scan_Telerik} />
            : (
                <div>
                    {localUserServ.get() ? "Bạn chưa đăng nhập tài khoản" : "Hãy đăng nhập hoặc tạo tài khoản"}
                </div>
            )
    },
    {
        path: '/scan-cve-2017-5487',
        component: localUserServ.get()?.maLoaiNguoiDung === 'user'
            ? <Layout Component={Scan_CVE_2017_5487} />
            : (
                <div>
                    {localUserServ.get() ? "Bạn chưa đăng nhập tài khoản" : "Hãy đăng nhập hoặc tạo tài khoản"}
                </div>
            )
    }


]