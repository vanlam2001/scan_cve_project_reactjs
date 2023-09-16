import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../Toolkits/restPassword';
import { message, Input, Button, Form } from 'antd';
import { UserOutlined, LockOutlined, UserAddOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

const Recovery_Password = () => {
    const dispatch = useDispatch();
    const resetPasswordStatus = useSelector((state) => state.passwordReset.status);
    const resetPasswordMessage = useSelector((state) => state.passwordReset.message);

    const [formData, setFormData] = useState({
        username: '',
        recovery_password: '',
        new_password: '',
        confirm_password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        dispatch(resetPassword(formData));
    };

    return (
        <div>
            {resetPasswordStatus === 'succeeded' && <div>{resetPasswordMessage}</div>}
            {resetPasswordStatus === 'failed' && <div>Error: {resetPasswordMessage}</div>}
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
                <h2 className="text-4xl tracking-tight">Lấy lại mật khẩu</h2>
            </div>
            <div className="flex justify-center my-2 mx-4 md:mx-0">
                <Form
                    onFinish={handleSubmit}
                    name="register"
                    initialValues={{
                        remember: true,
                    }}

                    className="w-full max-w-xl bg-white rounded-lg shadow-md p-6"
                >
                    <Form.Item
                        name="username"
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
                        name="recovery_password"
                        label="Mật khẩu cấp 2"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mật khẩu cấp 2!',
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
                        name="new_password"
                        label="Mật khẩu mới"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mật khẩu mới!',
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
                        name="confirm_password"
                        label="Nhập lại mật khẩu"
                        dependencies={['new_password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mật khẩu!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('new_password') === value) {
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



                    <Form.Item>
                        <button
                            type="primary"
                            htmlType="submit"
                            className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none "
                        >
                            Xác nhận
                        </button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Recovery_Password;
