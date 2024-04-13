//requires here
const http = require('http');
const fs = require('fs');

const config = require('./config.json');

if(config.EnvCreds === true)  var Auth = `${process.env.DYFI_USER}:${process.env.DYFI_KEY}`;
else
{
    try
    {
        var Auth = `${config.User}:${config.Key}`;
    }
    catch(err)
    {
        console.log(err);
    }
}
 //Set this value to the interval you want the requests to be sent (in days)
var UpdateInterval = config.UpdateInterval;

var options  = {
    headers: {
                "Authorization": `Basic ${btoa(Auth)}`,
                "User-Agent": "dy.fi_updater.js/1.0.0 (anoojjonttu@gmail.com)",
                "Cache-Control": "no-cache"
            }
}

//run the update request once
sendUpdateRequest()
//routinely send a dns update request to dy.fi to make sure it doesn't expire
setInterval(sendUpdateRequest, UpdateInterval * 24 * 3600 * 100);

function sendUpdateRequest()
{
    http.get(`http://dy.fi/nic/update?hostname=${config.hostname}`, options, res => {
        let data = [];
        const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
        console.log('Status:', res.statusCode);
        console.log('Response header date: ', headerDate); 
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log('Response:', chunk);
        });
        res.on('end', () => {
            console.log('Response ended:', data);
            });
    }).on('error', err => {
        console.log('Error:', err.message);
    });
}