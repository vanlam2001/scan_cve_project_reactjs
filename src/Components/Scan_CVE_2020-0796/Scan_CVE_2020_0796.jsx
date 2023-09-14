import React, { useState } from 'react'
import { scanCVE } from '../../services/scanCVE';

const Scan_CVE_2020_0796 = () => {
    const [ipAddress, setIpAddress] = useState("");
    const [result, setResult] = useState(null);

    const checkVulnerability = async () => {
        try {
            const response = await scanCVE.scan_cve_2020_0786(ipAddress)

            setResult(response.data);
        } catch (error) {
            setResult(error.message);
        }
    };


    return (
        <div>
            <h1>Check SMB Vulnerability</h1>
            <div>
                <label>IP Address:</label>
                <input
                    type="text"
                    value={ipAddress}
                    onChange={(e) => setIpAddress(e.target.value)}
                />
            </div>
            <button onClick={checkVulnerability}>Check Vulnerability</button>
            {result !== null && (
                <div>
                    <h2>Result:</h2>
                    <p>{result}</p>
                </div>
            )}
        </div>
    )
}

export default Scan_CVE_2020_0796