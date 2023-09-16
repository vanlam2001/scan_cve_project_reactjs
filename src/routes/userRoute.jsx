import Scan_CVE_2017_5487 from "../Components/Scan_CVE_2017_5487/Scan_CVE_2017_5487";
import Scan_Telerik from "../Components/Scan_Telerik/Scan_Telerik";
import Home_Page from "../Home_Page/HomePage";
import Layout from "../Layout/Layout";
import Login_Page from "../Page/Login_Page/Login_Page";
import Register_Page from "../Page/Register_Page/Register_Page";
import { localUserServ } from "../services/localService";
import CVE_2020_0796 from "../Components/CVE_2020-0796/CVE_2020_0796";
import NotFound_Page from "../Page/NotFound_Page/NotFound_Page";
import Warning_Page from "../Components/Warning_Page/Warning_Page";
import Recovery_Password from "../Page/Recovery_Password/Recovery_Password";



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
        path: '*',
        component: <Layout Component={NotFound_Page} />
    },
    {
        path: '/quen-mat-khau',
        component: <Layout Component={Recovery_Password} />
    },
    {
        path: '/warning',
        component: localUserServ.get()?.maLoaiNguoiDung === 'user'
            ? <Layout Component={Warning_Page} />
            : (
                <div>
                    {localUserServ.get() ?
                        "Bạn chưa đăng nhập tài khoản" : <Layout Component={Login_Page} />}
                </div>
            )
    },

    {
        path: '/scan-cve-2017-9248',
        component: localUserServ.get()?.maLoaiNguoiDung === 'user'
            ? <Layout Component={Scan_Telerik} />
            : (
                <div>
                    {localUserServ.get() ?
                        "Bạn chưa đăng nhập tài khoản" : <Layout Component={Login_Page} />}
                </div>
            )
    },
    {
        path: '/scan-cve-2017-5487',
        component: localUserServ.get()?.maLoaiNguoiDung === 'user'
            ? <Layout Component={Scan_CVE_2017_5487} />
            : (
                <div>
                    {localUserServ.get() ? "Bạn chưa đăng nhập tài khoản" : <Layout Component={Login_Page} />}
                </div>
            )
    },

    {
        path: '/cve-2020-0796',
        component: localUserServ.get()?.maLoaiNguoiDung === 'user'
            ? <Layout Component={CVE_2020_0796} />
            : (
                <div>
                    {localUserServ.get() ? "Bạn chưa đăng nhập tài khoản" : <Layout Component={Login_Page} />}
                </div>
            )
    },
]