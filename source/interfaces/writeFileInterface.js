import fs from 'fs';

function writeLog (logMessage) {
    //  put the date on the message log
    fs.appendFile('logsFile.log', logMessage + '\r\n', (err) => {
        if (err) {
            throw err;
        }
    });
}

export {writeLog};
