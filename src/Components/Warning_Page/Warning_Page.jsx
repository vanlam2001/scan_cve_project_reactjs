import React from 'react'

const Warning_Page = () => {
    return (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline text-3xl">Thông báo quan trọng, đây là nội dung cảnh báo của bạn.</span>
            <p className="text-sm sm:text-base mt-2 py-1">
                Ở tất cả các quốc gia, hành vi phá hoại tài sản được coi là hành vi truy cập máy tính trái phép
            </p>
            <p className="text-sm sm:text-base py-1">
                Trang này cho mục đích tốt đẹp giúp bạn hiểu thêm các lỗi bảo mật và sửa lỗi chúng
            </p>
            <p className="text-sm sm:text-base py-1">
                Không được sử dụng để phá hoại tổ chức hoặc cá nhân nào
            </p>
            <p className='text-sm sm:text-base py-1'>
                Chúng tôi sẽ không chịu trách nhiệm về hành động của bạn
            </p>

            <p className='text-sm sm:text-base py-1'>
                Luật An ninh mạng 2018, Luật số 24/2018/QH14 (Bạn có thể tham khảo tại đây)
            </p>

            <ul className="list-disc pl-5">
                <li>
                    <a href="https://luatvietnam.vn/an-ninh-quoc-gia/luat-an-ninh-mang-2018-164904-d1.html" className="text-blue-500 hover:underline">https://luatvietnam.vn/an-ninh-quoc-gia/luat-an-ninh-mang-2018-164904-d1.html</a>
                </li>
            </ul>
        </div>
    )
}

export default Warning_Page