import { logConsoleWithLog, logConsoleWithError, logFileWithLog, logFileWithError } from './logFunction';
/**
 * [log description]
 * @param  {[type]} logOutput  [description]
 * @param  {[type]} logType    [type of log => verbose/error/]
 * @param  {[type]} logPath    [description]
 * @param  {[type]} logMessage [description]
 * @return {[type]}            [description]
 */
export default (logMessage, logOutput, logType, logPath) => {
    //  see what env we are on
    const env = process.env.NODE_ENV;
    //    console.log('environment => ' + env);
    //    logOutput
    if (logOutput === undefined) {
        if (env === 'production' || env === 'test') {
            logOutput = 'file';
        } else if (env === 'development') {
            logOutput = 'console';
        } else {
            logOutput = 'file';
        }
    } else if (logOutput === 'console' || logOutput === 'con' || logOutput === 'c') {
        //  writeLogToConsole(logType, logPath, logMessage);
        logOutput = 'console';
    } else if (logOutput === 'file' || logOutput === 'f') {
        //  writeLogToLogFile(logType, logPath, logMessage);
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

    // logPath => the path dont mater if its undefined or not;
    //  message
    if (logMessage instanceof Error) {
        logType = 'error';
    } else logType = 'log';

    if (logMessage === undefined) {
        // let error = new Error('error passing the message to de log');
        // log(error);
    }

    //    console.log('logtype => ' + logType);
    //    console.log('logOutput => ' + logOutput);

    // different options to log
    if (logOutput === 'console' && logType === 'log') logConsoleWithLog(logPath, logMessage);
    if (logOutput === 'console' && logType === 'error') logConsoleWithError(logPath, logMessage);
    if (logOutput === 'file' && logType === 'log') logFileWithLog(logPath, logMessage);
    if (logOutput === 'file' && logType === 'error') logFileWithError(logPath, logMessage);
};
