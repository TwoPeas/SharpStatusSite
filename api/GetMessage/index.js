module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.res = {
        body: {
          text: "a sample key: " + process.env["ButtonDownToken"]
        }
    };
};