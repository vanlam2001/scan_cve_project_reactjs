import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, UserAddOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { NavLink } from "react-router-dom";
const Register_Page = () => {


    return (
        <div>
            <div className="text-center mt-24">
                {/* component */}
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
                <h2 className="text-4xl tracking-tight">Đăng ký tài khoản của bạn tại đây</h2>
            </div>
            <div className="flex justify-center my-2 mx-4 md:mx-0">
                <Form
                    name="register"
                    initialValues={{
                        remember: true,
                    }}
                    className="w-full max-w-xl bg-white rounded-lg shadow-md p-6"
                >
                    <Form.Item
                        name="taikhoan"
                        label="Tên người dùng"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập tên người dùng',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined />}
                            placeholder='Tên người dùng' />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="Địa chỉ email"
                        rules={[
                            {
                                type: 'email',
                                message: 'Thông tin nhập không phải là địa chỉ email',
                            },
                            {
                                required: true,
                                message: 'Vui lòng nhập email!',
                            },
                        ]}
                    >
                        <Input prefix={<MailOutlined />}
                            placeholder='Email' />
                    </Form.Item>


                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mật khẩu!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password
                            prefix={<LockOutlined />}
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item
                        name="matkhau"
                        label="Nhập lại mật khẩu"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mật khẩu!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        new Error('The two passwords do not match!')
                                    );
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined />}
                            placeholder="Confirm Password"
                        />
                    </Form.Item>


                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>
                            <span className="text-sm text-gray-700 pt-1">Luôn ghi nhớ tài khoản</span>
                        </Checkbox>
                    </Form.Item>

                    <div className="w-full flex items-center justify-between px-3 mb-3 ">
                        <div className="flex ml-auto">
                            <NavLink to={'/login'} className="text-blue-500 text-sm tracking-tight">
                                Bạn đã có tài khoản?
                            </NavLink>
                        </div>
                    </div>

                    <Form.Item>
                        <button
                            type="primary"
                            htmlType="submit"
                            className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none "
                        >
                            Sign in
                        </button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Register_Page;
