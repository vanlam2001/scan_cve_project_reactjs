import React, { useState } from 'react'
import { scanCVE } from '../../services/scanCVE';
import { Input, Button, List, message } from 'antd';


const Scan_CVE_2017_5487 = () => {
    const [url, setUrl] = useState('');
    const [result, setResult] = useState({});
    const [loading, setLoading] = useState(false);

    const handleUrlChange = (event) => {
        setUrl(event.target.value);
    };

    const handleScanClick = async () => {
        setLoading(true);
        try {
            const response = await scanCVE.scan_cve_2017_5487(url);
            setResult(response.data);
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setResult('Không tìm thấy dữ liệu')
                message.error('Không tìm thấy dữ liệu')
            } else if (error.response && error.response.status === 401) {
                setResult({ message: 'Vui lòng nhập url hợp lệ bắt đầu bằng http://example.com hoặc https://example.com' });
            } else if (error.response && error.response.status === 400) {
                setResult('Dữ liệu JSON không hợp lệ')
                message.error('Dữ liệu JSON không hợp lệ')
            } else {
                setResult('Đã xảy ra lỗi khi quét')
                message.error('Đã xảy ra lỗi khi quét')
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div style={{ padding: '20px' }}>
                <h1 className="text-3xl font-semibold mb-4">Scan CVE-2017-5487 Vulnerability</h1>
                <div>
                    <Input
                        placeholder='Nhập website'
                        value={url}
                        onChange={handleUrlChange}
                        style={{ marginBottom: '10px' }} />

                    <Button
                        onClick={handleScanClick}
                        loading={loading}
                        style={{
                            backgroundColor: 'dodgerblue',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >
                        Quét
                    </Button>
                </div>

                <div style={{ marginTop: '20px' }}>

                    <h2 className="text-3xl font-semibold mb-4">Kết quả quét</h2>
                    {result.message && (
                        <p style={{ color: result.error ? 'red' : 'green' }}>
                            {result.message}
                        </p>
                    )}
                    {result.users && (
                        <List
                            dataSource={result.users}
                            renderItem={(user) => (
                                <List.Item>
                                    ID: {user.ID}, Tên người dùng: {user.Name}, Tên đăng nhập: {user.User}
                                </List.Item>
                            )} />
                    )}
                </div>
            </div>
        </>
    )
}

export default Scan_CVE_2017_5487