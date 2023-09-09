import React, { useState } from 'react';
import { Input, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

const { TextArea } = Input;

function Scan_Cve_Telerik() {
    const [sites, setSites] = useState('');
    const [fileList, setFileList] = useState([]);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setSites(e.target.value);
    };

    const handleFileChange = (info) => {
        setFileList(info.fileList);
    };

    const uploadProps = {
        onRemove: (file) => {
            setFileList([]);
        },
        beforeUpload: (file) => {
            setFileList([file]);
            return false;
        },
        fileList,
    };

    const handleSubmit = async () => {
        if (!sites && fileList.length === 0) {
            message.error('Vui lòng nhập chuỗi hoặc tải lên tệp.');
            return;
        }

        setLoading(true);

        try {
            const formData = new FormData();
            if (fileList.length > 0) {
                formData.append('uploaded_file', fileList[0]);
            } else {
                formData.append('sites', sites);
            }

            const response = await axios.post('http://127.0.0.1:8000/api/check-vuln-cve-2017-9248', formData, {
                headers: {
                    Token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c', // Thay your_token_here bằng token của bạn

                },
            });

            setResults(response.data);
        } catch (error) {
            console.error('Error:', error);
            message.error('Đã xảy ra lỗi khi gọi API.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto mt-8">
            <div className="mb-4">
                <TextArea
                    placeholder="Nhập chuỗi cần kiểm tra (mỗi dòng một site)"
                    autoSize={{ minRows: 3, maxRows: 6 }}
                    value={sites}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <Upload {...uploadProps}>
                    <Button icon={<UploadOutlined />}>Tải lên tệp</Button>
                </Upload>
            </div>
            <div className="mb-4">
                <Button onClick={handleSubmit} loading={loading}>
                    Kiểm tra CVE-2017-9248
                </Button>
            </div>
            <div className="mb-4">
                <h2>Kết quả:</h2>
                <ul>
                    {results.map((result, index) => (
                        <li key={index}>{result}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Scan_Cve_Telerik;
