import fs from 'fs';

function writeLog (logMessage) {
    //  put the date on the message log
    console.log('entro writelog');
    fs.appendFile('logsFile.log', logMessage + '\r\n', (err) => {
        if (err) {
            console.log('retorno error');
            throw err;
        }
    });
}

export {writeLog};
