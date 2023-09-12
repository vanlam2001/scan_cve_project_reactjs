import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { useSelector } from 'react-redux'
import { localUserServ } from '../../services/localService'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames';
const Header_UserInfo = () => {
    let { userInfo } = useSelector(state => state.userSlice)

    let handleLogout = () => {
        localUserServ.remove();
        window.location = '/';

    }
    if (userInfo) {
        return (
            <Menu as="div" className="relative ml-3">
                <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>

                        <span className='text-gray-100'>{userInfo.username}</span>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                >
                                    Hồ sơ của bạn
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                >
                                    Cài đặt
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    onClick={handleLogout}
                                    href="#"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                >
                                    Đăng xuất
                                </a>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </Transition>
            </Menu>
        )
    }
    else {
        return (
            <>
                <div className='flex items-center '>
                    <NavLink className="m-4 text-sm font-semibold leading-6 text-gray-100" to={"/login"}>

                        Đăng nhập

                    </NavLink>

                    <NavLink className="text-sm font-semibold leading-6 text-gray-100" to={"/register"}>

                        Đăng ký

                    </NavLink>
                </div>

            </>
        )
    }


}

export default Header_UserInfo