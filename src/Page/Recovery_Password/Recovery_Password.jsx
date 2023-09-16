import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword } from '../../Toolkits/restPassword';

const Recovery_Password = () => {
    const dispatch = useDispatch();
    const resetPasswordStatus = useSelector((state) => state.passwordReset.status)
    const resetPasswordMessage = useSelector((state) => state.passwordReset.message)

    const [formData, setFormData] = useState({
        username: '',
        recovery_password: '',
        new_password: '',
        confirm_password: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(resetPassword(formData));
    };
    return (
        <div>
            <h2>Password Reset</h2>
            {resetPasswordStatus === 'succeeded' && <div>{resetPasswordMessage}</div>}
            {resetPasswordStatus === 'failed' && <div>Error: {resetPasswordMessage}</div>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="recovery_password"
                    placeholder="Recovery Password"
                    value={formData.recovery_password}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    name="new_password"
                    placeholder="New Password"
                    value={formData.new_password}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    name="confirm_password"
                    placeholder="Confirm Password"
                    value={formData.confirm_password}
                    onChange={handleInputChange}
                />
                <button type="submit">Reset Password</button>
            </form>
        </div>
    )
}

export default Recovery_Password