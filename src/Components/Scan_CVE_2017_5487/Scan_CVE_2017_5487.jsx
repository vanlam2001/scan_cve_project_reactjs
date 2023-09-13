import React, { useState } from 'react'
import { scanCVE } from '../../services/scanCVE';
import { Input, Button, List, message } from 'antd';


const Scan_CVE_2017_5487 = () => {
    const [url, setUrl] = useState('');
    const [result, setResult] = useState({});

    const handleUrlChange = (event) => {
        setUrl(event.target.value);
    };

    const handleScanClick = async () => {
        try {
            const response = await scanCVE.scan_cve_2017_5487(url);
            setResult(response.data);
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setResult({ message: 'Không tìm thấy dữ liệu' })
            } else {
                setResult({ message: 'Đã xảy lỗi khi quét' });
            }
        }
    }

    return (
        <>
            <div style={{ padding: '20px' }}>
                <h1>Scan CVE-2017-5487 Vulnerability</h1>
                <div>
                    <Input
                        placeholder='Nhập website'
                        value={url}
                        onChange={handleUrlChange} />
                    <Button onClick={handleScanClick}>
                        Scan
                    </Button>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <h2>Kết quả quét</h2>
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