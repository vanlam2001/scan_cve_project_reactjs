import React, { useState } from 'react'
import { scanCVE } from '../../services/scanCVE';
import { Button, Input } from 'antd';
import { Exploit_CVE_2020_0796 } from '../Exploit_CVE_2020_0796/Exploit_CVE_2020_0796';

const CVE_2020_0796 = () => {
    const [ipAddress, setIpAddress] = useState('');
    const [result, setResult] = useState('');
    const [error, setError] = useState('');

    const handleIpAddressChange = (event) => {
        setIpAddress(event.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await scanCVE.scan_cve_2020_0786(ipAddress);
            setResult(response.data);
        } catch (err) {
            setError(err.response ? err.response.data : 'Something went wrong');
        }
    };


    return (
        <>
            <div style={{ padding: '20px' }}>
                <h1 className='text-3xl font-semibold mb-4'>Check CVE-2020-0786 Vulnerability</h1>
                <div>
                    <Input
                        placeholder='Nhập ip'
                        value={ipAddress}
                        onChange={handleIpAddressChange}
                        style={{ marginBottom: '10px' }} />
                    <Button onClick={handleSubmit}
                        style={{
                            backgroundColor: 'dodgerblue',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}>
                        Quét
                    </Button>
                    {result && <p>Kết quả: {result}</p>}
                    {error && <p>Error: {error}</p>}
                </div>
            </div>

            <div>
                <Exploit_CVE_2020_0796 />
            </div>
        </>

    )
}

export default CVE_2020_0796