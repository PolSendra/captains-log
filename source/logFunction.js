import { writeLog } from './interfaces/writeFileInterface';

function logConsoleWithLog (logPath, logMessage) {
    if (logPath === undefined) {
        console.log(
            `[LOG] : Log message: ${logMessage}`
        );
    } else {
        console.log(
            `[LOG] : Log in file ${logPath}.
             with message: ${logMessage}`
        );
    }
    return true;
}

function logConsoleWithError (logPath, logMessage) {
    //
    if (logPath === undefined) {
        console.error(
            `[ERROR] : ${logMessage.stack}.`
        );
    } else {
        console.error(
            `[ERROR] : Error in file ${logPath}.
            ${logMessage.stack}.`
        );
    }
    return true;
}

function logFileWithLog (logPath, logMessage) {
    //
    let result;
    const date = new Date().toLocaleString();
    if (logPath === undefined) {
        writeLog(`[LOG][${date}] : (${logMessage})`);
    } else {
        writeLog(`[LOG][${date}][${logPath}] : (${logMessage})`);
    }
    return result;
}

function logFileWithError (logPath, logMessage) {
    //
    let result;
    const date = new Date().toLocaleString();
    if (logPath === undefined) {
        writeLog(`[ERROR][${date}] : (${logMessage.message}) | [Trace] : (${logMessage.stack})`);
    } else {
        writeLog(`[ERROR][${date}][${logPath}] : (${logMessage.message}) | [Trace] : (${logMessage.stack})`);
    }
    return result;
}

export {logConsoleWithLog, logConsoleWithError, logFileWithLog, logFileWithError};
