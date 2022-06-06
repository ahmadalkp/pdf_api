const url = 'http://api-uat.astralife.co.id/sh/v1/download/riplay'
const token = '3699d137-574a-35e3-881d-75bf1fc646cc'
const config = {
    headers: {
        'Authorization': `Bearer ${token}`
    }
};
const bodyParameters = {
    "agent_code": "0022300001",
    "product_code": "FPS",
    "nama": "Hardiansyah",
    "tgl_lahir": "1994-05-24",
    "usia": "28",
    "jenis_kelamin": "M",
    "berat_badan": "60",
    "tinggi_badan": "170",
    "periode_kontribusi": "1",
    "kontribusi": "29000",
    "manfaat": "100000000",
    "ahli_Waris": [
        {
            "nama": "Anak Hardiansyah",
            "hubungan": "CHL",
            "jenis_kelamin": "M",
            "alokasi": "100"
        }
    ]
};


function postfetch() {
    fetch(url, config, bodyParameters, {
        method: 'POST'
    })
        .then(res => res.blob())
        .then(blob => {
            var file = window.URL.createObjectURL(blob);
            window.location.assign(file);
        });
}

// postfetch()
postaxios()

function postaxios() {
    axios.post(
        url,
        bodyParameters,
        config,
        { responseType: 'blob' } // !!!
    ).then((response) => {
        // window.open(URL.createObjectURL('www.google.com'));
        window.open(URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' })))
    })
}

function getblob(file) {
    const blob = new Blob([file], { type: 'contentType' });
    getBase64(blob)
}

function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        console.log(reader.result);
        const data = reader.result;
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };

}

