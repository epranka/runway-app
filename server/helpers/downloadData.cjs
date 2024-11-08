const request = require('request');

const downloadFile = (url) => {
    return new Promise((resolve, reject) => {
        request.get(url, (error, _response, body) => {
            if (error) return reject(error);
            return resolve(body);
        });
    });
};

module.exports = downloadFile;