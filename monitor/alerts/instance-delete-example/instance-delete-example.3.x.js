// Download the Node helper library from twilio.com/docs/node/install
// These are your accountSid and authToken from https://www.twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';

const MonitorClient = require('twilio').MonitorClient;
let client = new MonitorClient(accountSid, authToken);

client.alerts('NO5a7a84730f529f0a76b3e30c01315d1a').delete(function(err, data) {
    if (err) {
        console.log(err.status);
        throw err.message;
    } else {
        console.log(
            'Sid NO5a7a84730f529f0a76b3e30c01315d1a deleted successfully.'
        );
    }
});
