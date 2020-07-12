const https = require('https');

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
    
    const request = https.request(options, (res) => {
        let data = ''
         res.on('data', (chunk) => {
           data += chunk.toString();
         });
         res.on('end', () => {
            context.res = {
                body: data
            };
         })
       });
       
    request.on('error', (e) => {
        context.res = {
            body: 'error'
        }
    });

    request.end()
};