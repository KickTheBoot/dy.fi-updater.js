//requires here
const http = require('http');
const package = require('./package.json');

exports.sendUpdateRequest = function(hostname, user, key)
{
    var Auth = `${user}:${key}`;
    //construct the options object used for authentication
    let options = {
      headers: {
        Authorization: `Basic ${btoa(Auth)}`,
        "User-Agent": `${package.name}/${package.version} (anoojjonttu@gmail.com)`,
        "Cache-Control": "no-cache",
      }
    };
    http.get(`http://dy.fi/nic/update?hostname=${hostname}`, options, res => {
        let data = [];
        const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
        console.log('Status:', res.statusCode);
        console.log('Response header date: ', headerDate); 
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log('Response:', chunk);
        });
    }).on('error', err => {
        console.log('Error:', err.message);
        });
}