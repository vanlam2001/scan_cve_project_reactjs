import React from 'react'

const Footer_Page = () => {
    // Lấy năm hiện tại
    const currentYear = new Date().getFullYear();
    return (
        <>

            <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">

                <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
                    <span className='mr-1'>© {currentYear} Chủ sỡ hữu:</span>
                    <a className="font-semibold text-neutral-600 dark:text-neutral-400 " href="https://www.facebook.com/vanlam1412" target='_blank'>Nguyễn Văn Lắm</a>
                </div>
            </footer>

        </>
    )
}

export default Footer_Page