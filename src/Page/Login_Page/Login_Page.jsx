import React from 'react'
import { UserOutlined, LockOutlined, UserAddOutlined, MailOutlined, PhoneOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { localUserServ } from '../../services/localService';
import { userServ } from '../../services/userService';
import { setLoginUser } from '../../Toolkits/userSlice';

const Login_Page = () => {
    let dispatch = useDispatch();

    let fillForm = () => {
        let info = localUserServ.get();
        if (info != null) {
            return info;
        } else {
            return { username: "", password: "" }
        }
    }
    const onFinish = (values) => {
        userServ.loginUser(values)
            .then((res) => {
                message.success("Đăng nhập thành công");
                dispatch(setLoginUser(res.data));
                localUserServ.set(res.data)
                setTimeout(() => {
                    window.location.href = '/'
                }, 1500);
            })
            .catch((error) => {
                if (error.response && error.response.status === 404) {
                    message.error('Tài khoản không tồn tại')
                } else if (error.response && error.response.status === 401) {
                    message.error('Sai mật khẩu')
                } else {
                    message.error('Đã xảy ra lỗi khi đăng nhập')
                }
            })
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            {/* component */}
            <div className="text-center mt-24">
                <div className="flex items-center justify-center">
                    <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        class="w-12 h-12"
                        stroke="currentColor"
                    >
                        <image href="https://www.emojimeaning.com/img/img-apple-160/1f1fb-1f1f3.png" x="0" y="0" width="24" height="24" />
                    </svg>
                </div>
                <h2 className="text-4xl tracking-tight">
                    Đăng nhập tài khoản
                </h2>
                <span className="text-sm">hoặc <NavLink to={'/register'} className="text-blue-500">
                    Đăng ký tài khoản tại đây
                </NavLink>
                </span>
            </div>

            <div className="flex justify-center my-2 mx-4 md:mx-0">
                <Form
                    name="register"
                    initialValues={{
                        remember: true,
                        username: fillForm().username,
                        password: fillForm().password
                    }} onFinish={onFinish} onFinishFailed={onFinishFailed}
                    className="w-full max-w-xl bg-white rounded-lg shadow-md p-6"
                >

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-full px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Password">Tên người dùng</label>
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập tên người dùng!',
                                    },
                                ]}
                            >
                                <Input
                                    className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                                />
                            </Form.Item>
                        </div>
                        <div className="w-full md:w-full px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Password">Password</label>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập mật khẩu!',
                                    },
                                ]}

                            >
                                <Input.Password
                                    className="w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-2 px-2 leading-tight focus:outline-none"
                                />

                            </Form.Item>
                        </div>
                        <div className="w-full flex items-center justify-between px-3 mb-3 ">
                            <label htmlFor="remember" className="flex items-center w-1/2">
                                <input type="checkbox" name id className="mr-1 bg-white shadow" />
                                <span className="text-sm text-gray-700 pt-1">Remember Me</span>
                            </label>
                            <div className="w-1/2 text-right">
                                <a href="#" className="text-blue-500 text-sm tracking-tight">Forget your password?</a>
                            </div>
                        </div>
                        <div className="w-full md:w-full px-3">
                            <button className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none ">Sign in</button>
                        </div>
                    </div>
                </Form>


            </div>
        </div>

    )
}

export default Login_Page