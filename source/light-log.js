import { logConsoleWithLog, logConsoleWithError, logFileWithLog, logFileWithError } from './logFunction';

module.exports = (logMessage, logOutput, logType, logPath) => {
    //  see what env we are on
    const env = process.env.NODE_ENV;
    //    console.log('environment => ' + env);

    //    logOutput
    if (logOutput === undefined) {
        if (env === 'production' || env === 'test') {
            logOutput = 'file';
        } else /* (env === 'development') */ {
            logOutput = 'console';
        }
    } else if (logOutput === 'console' || logOutput === 'con' || logOutput === 'c') {
        logOutput = 'console';
    } else if (logOutput === 'file' || logOutput === 'f') {
        logOutput = 'file';
    } else logOutput = 'console'; //    maybe put error here

    //  we force logOutput to file in environment eql to Production
    if (env === 'production' || env === 'test') logOutput = 'file';

    //  logType
    if (logType === undefined) {
        if (logMessage instanceof Error) {
            logType = 'error';
        } else logType = 'log';
    } else if (logType === 'error' || logType === 'err' || logType === 'e') {
        logType = 'error';
    } else if (logType === 'log' || logType === 'l') {
        logType = 'log';
    } else logType = 'log'; //    maybe put error here

    //  message
    if (logMessage instanceof Error) {
        logType = 'error';
    } else logType = 'log';
    if (logMessage === undefined) {
        // let error = new Error('error passing the message to de log');
    }

    //  console.log('logtype => ' + logType);
    //  console.log('logOutput => ' + logPath);

    // different options to log
    let result;
    if (logOutput === 'console' && logType === 'log') {
        result = logConsoleWithLog(logPath, logMessage);
    }
    if (logOutput === 'console' && logType === 'error') {
        result = logConsoleWithError(logPath, logMessage);
    }
    if (logOutput === 'file' && logType === 'log') {
        result = logFileWithLog(logPath, logMessage);
    }
    if (logOutput === 'file' && logType === 'error') {
        result = logFileWithError(logPath, logMessage);
    }
    return result;
};
