const cookieStr = "__Secure-BUCKET=COUD; SID=g.a0005gigH8oA1CnsTHG8V8Y0VizgMeXlHzpXTKKpfvqhDziLCQZuxzzAHoA6I_RH64dYIuSfmgACgYKAdwSARcSFQHGX2Mi-fLR58C2ZYutBT_-vrV3FhoVAUF8yKrbYQeYgR1_9CEMtU6FbJG60076; __Secure-1PSID=g.a0005gigH8oA1CnsTHG8V8Y0VizgMeXlHzpXTKKpfvqhDziLCQZuwMR2Qp_R3aGysXEYoiYVJQACgYKAZ8SARcSFQHGX2Miy_3TOBUSWEOjTKhI893XTxoVAUF8yKophhD_2hxoZnkcOct5yvVn0076; __Secure-3PSID=g.a0005gigH8oA1CnsTHG8V8Y0VizgMeXlHzpXTKKpfvqhDziLCQZuVRuQtBFOdVnpAyqiS0a0QQACgYKAWcSARcSFQHGX2MidADD_f9D1e5ZRKvoqKSaehoVAUF8yKpfkY76QQFWxXol8J_bciHM0076; HSID=AKFaPKsUgCQi9xZ-H; SSID=Ac3tUb1ZZHIRZk0g6; APISID=Dhvr3Z4g9vQQom57/AzRUfg-8PpfeFQxQc; SAPISID=Nkd4imO8btKw9Rrs/APwh8Krm3_H45UVI6; __Secure-1PAPISID=Nkd4imO8btKw9Rrs/APwh8Krm3_H45UVI6; __Secure-3PAPISID=Nkd4imO8btKw9Rrs/APwh8Krm3_H45UVI6; SEARCH_SAMESITE=CgQI8Z8B; AEC=AaJma5t7wl827LFq6UL9w7ZAFwJzNoL1CGdRwRbpJo5h_CeJt3JVsJwAQA; __Secure-1PSIDTS=sidts-CjEB7I_69Gd08pDrfJA8LzM22q4uhncPV1D7HEZaSpdCNSyjMUvkZNRktmyQ_1qX29pZEAA; __Secure-3PSIDTS=sidts-CjEB7I_69Gd08pDrfJA8LzM22q4uhncPV1D7HEZaSpdCNSyjMUvkZNRktmyQ_1qX29pZEAA; NID=528=QEP0gKM-tbDTmlFBeoMqoOpv-cq_2MDg8qYppw2m-PuQX5Pf3677FqRR1dFMlT5rhMEcy1I8G3AMLng93oClGsoAsLFBDag_A5VUB23yurTqUG7MXAXJiRNzJ75gEy2CuQGYFs0pe3pzJdZGMA4ca14RMhjFtqxtTKfFNX3Q-9_e4IUVj2XF_DzS9e5vZrSzWwapqTEuF8BU4lFVxt0si_I_TqgeAyA3_0vXVIllVs5XUkFjAMw4lwRT9WU4mum7S2hj_aivTfgn3uoPKmDz6syBA1qN5vwXEl81crMQE16Dhb0ir8qeWiPq66ChOc3y1Ck1SFsrT-DBXCcmRzEDBfECruS3VQwx5nhDV-6sOCa-KVJPT0o3RBMoZRN1Fcj44Tw72vJjd2WKYSoWNSiC4xyQFEL0Zn6uCqn0ZJWysfVGd8RCcEfcYU2_zD3EndELvUqD4ATZ8oP3-AuRvZCQPQl147Q45fIrr_2Gh05pC-v38xzQV24kqVdLqlMlY9BwtIdoxHtUFL_013jtMSHEWFkxDfCGF3PWzIB95xChJKTU56w_pFnP6KPGnvK-FeKMlWx2Rxd7dQKTmVBIBq2E7LPIZq7F1QIa7-D2fGfAIY73a0OypFxCYRoOnQ1ZLavZcQvQqPHixfemKWP22D8i_cjRdK3dXOJ2KJCf3_-9l4ecuMYYnZS2SZJX4Fyve9iLxZy_1Qc5Dl5qQkvvQ03OyskGFQTNF9Ci5XxPcNgbIAws1Y-7crXNCd61FdvMS5naOu5mvjIoNQ; SIDCC=AKEyXzUKU0CEywhZJLFTwZx0tLWK19rmPsZKjetKKmkrtqGwz6xQQhz1wedbhGGNEe4nSufnoWQ; __Secure-1PSIDCC=AKEyXzV999PLc2ZUkkQdlSmu0Gd93BJZZAeY9ceOBn9oHyhxPfC-Jrt2P9LV-3vkLuGz48rbvA; __Secure-3PSIDCC=AKEyXzXDKF7arvdzT1Mjaiba6MoZvjiMqaWLqmb51iZFHqrnJni3btZ6K8OLaO7HtHV1UZOg9F0"

// Cookie 字段映射
const cookieFieldsMap = {
    '__Secure-1PSID': 'SECURE_1PSID',
    '__Secure-1PSIDTS': 'SECURE_1PSIDTS',
    'SAPISID': 'SAPISID',
    '__Secure-1PAPISID': 'SECURE_1PAPISID',
    'SID': 'SID',
    'HSID': 'HSID',
    'SSID': 'SSID',
    'APISID': 'APISID'
};

const cookieHeloer = {
    // 解析 Cookie
    parseCookie: (cookieStr) => {
        const result = {};
        if (!cookieStr) return result;

        cookieStr.split(';').forEach(item => {
            const trimmed = item.trim();
            const eqIndex = trimmed.indexOf('=');
            if (eqIndex > 0) {
                const key = trimmed.substring(0, eqIndex).trim();
                const value = trimmed.substring(eqIndex + 1).trim();
                if (cookieFieldsMap[key]) {
                    result[cookieFieldsMap[key]] = value;
                }
            }
        });
        return result;
    }
}