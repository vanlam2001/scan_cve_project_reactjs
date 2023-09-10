import { Spin } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import Header_Page from '../Components/Header_Page/Header_Page'
import Footer_Page from '../Components/Footer_Page/Footer_Page'

const Layout = ({ Component }) => {
    const isSpinner = useSelector((state) => state.spinnerSlice.isSpinner)
    return (
        <Spin spinning={isSpinner}>
            <div className='min-h-screen flex flex-col'>
                <Header_Page />
                <div className='flex-grow'>
                    <Component></Component>
                </div>
            </div>
            <Footer_Page />
        </Spin>

    )
}

export default Layout