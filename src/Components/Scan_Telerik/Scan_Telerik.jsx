import React, { useState } from 'react';
import { Input, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import { scanCVE } from '../../services/scanCVE';

const { TextArea } = Input;

function Scan_Telerik() {
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

            // Use scanCve module for the API call 
            const response = await scanCVE.scan_cve_2017_9248(formData)
            setResults(response.data);
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setResults('Chưa có dữ liệu đầu vào, Vui lòng nhập website hoặc tệp')
                message.error('Chưa có dữ liệu đầu vào, Vui lòng nhập website hoặc tệp')
            } else if (error.response && error.response.status === 401) {
                setResults(['Vui lòng nhập url hợp lệ bắt đầu bằng http://example.com hoặc https://example.com']);
            } else {
                setResult('Đã xảy ra lỗi khi quét')
                message.error('Đã xảy ra lỗi khi quét')
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className='container mx-auto mt-3'>

                <h1 className="text-3xl font-semibold mb-4">Kiểm tra telerik</h1>
            </div>
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
                    <Button
                        style={{
                            backgroundColor: 'dodgerblue',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                        onClick={handleSubmit}
                        loading={loading}>
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
        </>

    );
}

export default Scan_Telerik;
