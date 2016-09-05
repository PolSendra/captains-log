
function logConsoleWithLog (logPath, logMessage) {
    //    console.log('logPath => ' + logPath);
    //    console.log('logMessage => ' + logMessage);
    if (logPath === undefined) {
        console.log(
            `Log message: ${logMessage}`
        );
    } else {
        console.log(
            `Log in file ${logPath}.
             with message: ${logMessage}`
        );
    }
}

function logConsoleWithError (logPath, logMessage) {
    //
    if (logPath === undefined) {
        console.error(
            `Error with message: ${logMessage.message}.
            Error with trace ${logMessage.stack}.`
        );
    } else {
        console.error(
            `Error in file ${logPath}.
            Error with message: ${logMessage.message}.
            Error with trace ${logMessage.stack}.`
        );
    }
}

function logFileWithLog (logType, logPath, logMessage) {
    //
    /* if (logPath === 'undefined') {

    } else {

    }*/
}

function logFileWithError (logType, logPath, logMessage) {
    //
    /* if (logPath === 'undefined') {

    } else {

    }*/
}

export {logConsoleWithLog, logConsoleWithError, logFileWithLog, logFileWithError};
