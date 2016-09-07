import fs from 'fs';

export function writeLog (logMessage) {
    //  put the date on the message log
    fs.appendFile('logsFile.log', logMessage + '\r\n', function (err) {
        if (err) {
            return console.log(err);
        }
        return true;
    });
}
