const http = require('https');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const options = {
        hostname: 'api.buttondown.email',
        port: 443,
        path: '/v1/subscribers',
        method: 'GET',
        headers: {
            'Authorization': 'token ' + process.env["ButtonDownToken"]
        }
    }

    let request = http.request(options, (res) => {
        res.on('data', (d) => {
            response += d;
        })
    })

    context.res = {
        body: response
    };
};