const https = require('https');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const data = JSON.stringify({
        "email": "ben.hyrman+test1@gmail.com",
        "referrer_url": "sharpstatus.com",
        "metadata": {},
        "tags": [
            "beta subscriber"
        ]
    })

    const options = {
        hostname: 'api.buttondown.email',
        port: 443,
        path: '/v1/subscribers',
        method: 'POST',
        headers: {
            'Authorization': 'token ' + process.env["ButtonDownToken"],
            'Content-Type': 'application/json',
            'Content-Length': data.length        
        }
    }

    let data = ''
    
    const request = https.request(options, (res) => {
         res.on('data', (chunk) => {
           data += chunk.toString();
         });
       });
       
    request.on('error', (e) => {
        data = 'error'
    });

    request.write(data)
    request.end()

    context.res = {
        body: data
    };
};