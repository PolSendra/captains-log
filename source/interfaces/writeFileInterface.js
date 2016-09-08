import fs from 'fs';

function writeLog (logMessage) {
    //  put the date on the message log
    console.log('entro writelog message ' + logMessage);
    fs.appendFile('logsFile.log', logMessage + '\r\n', (err) => {
        if (err) {
            console.log('retorno error');
            throw err;
        }
    });
    return true;
}

export {writeLog};
