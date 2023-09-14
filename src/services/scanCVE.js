import { https } from "./config"

export const scanCVE = {
    scan_cve_2017_9248: (formData) => {
        return https.post('/api/check-vuln-cve-2017-9248', formData)
    },
    scan_cve_2017_5487: (url) => {
        return https.post('/api/check-vuln-cve-2017-5487', { url });
    },
    scan_cve_2020_0786: (targetIp) => {
        return https.post('/api/exploit-cve-2020-0796', { ip_address: targetIp })
    }
}