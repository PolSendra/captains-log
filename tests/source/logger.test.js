/* eslint-env mocha */
import { expect } from 'chai';
import sinon from 'sinon';
import log from '../../source/logger.js';
import * as logFunction from '../../source/logFunction.js';

//  { logConsoleWithLog, logConsoleWithError, logFile }

describe('test suit for the log module', () => {
    //  variables
    //  let logOutput, logType, logPath, logMessage;
    let stub;
    let stubFileLog;
    let stubFileError;

    describe('Development environment', () => {
        beforeEach(() => {
            process.env.NODE_ENV = 'development';
        });
        afterEach(() => {
            stub.restore();
        });
        describe('It should call logConsoleWithLog', () => {
            it('with logOutput = console and logType = log and some logPath', () => {
                // creating a stub
                stub = sinon.stub(logFunction, 'logConsoleWithLog');
                log('Test message for console.log', 'console', 'log', 'somePath');
                expect(stub.called).to.be.true;
                expect(stub.calledOnce).to.be.true;
            });
            it('with logOutput = console and logType = log and logPath = undefined', () => {
                // creating a stub
                stub = sinon.stub(logFunction, 'logConsoleWithLog');
                log('Test message for console.log', 'console', 'log');
                expect(stub.called).to.be.true;
                expect(stub.calledOnce).to.be.true;
            });
            it('with only message', () => {
                // creating a stub
                stub = sinon.stub(logFunction, 'logConsoleWithLog');
                log('Test message for console.log');
                expect(stub.called).to.be.true;
                expect(stub.calledOnce).to.be.true;
            });
            it('with random params', () => {
                // creating a stub
                stub = sinon.stub(logFunction, 'logConsoleWithLog');
                log('Test message for console.log', 'consola', 'logg', 'path');
                expect(stub.called).to.be.true;
                expect(stub.calledOnce).to.be.true;
            });
        });
        describe('Call logConsoleWithError', () => {
            it('with logOutput = console and logType = log ', () => {
                // creating a stub
                stub = sinon.stub(logFunction, 'logConsoleWithError');
                let error = new Error('Testing a new error');
                log(error, 'console', 'error', '');
                expect(stub.called).to.be.true;
                expect(stub.calledOnce).to.be.true;
            });
            it('with logOutput = console and logType = log and logPath = undefined', () => {
                // creating a stub
                stub = sinon.stub(logFunction, 'logConsoleWithError');
                let error = new Error('Testing a new error');
                log(error, 'console', 'error', undefined);
                expect(stub.called).to.be.true;
                expect(stub.calledOnce).to.be.true;
            });
            it('with logOutput = console and logType = log and message instanceof Error', () => {
                // creating a stub
                stub = sinon.stub(logFunction, 'logConsoleWithError');
                let error = new Error('Testing a new error');
                log(error, 'console', 'log', '');
                expect(stub.called).to.be.true;
                expect(stub.calledOnce).to.be.true;
            });
        });
        describe('Call logFile', () => {
            it('with logOutput = file we should call logFile', () => {
                // creating a stub
                stub = sinon.stub(logFunction, 'logFileWithError');
                let error = new Error('Testing a new error');
                log(error, 'file', 'error', '');
                expect(stub.called).to.be.true;
                expect(stub.calledOnce).to.be.true;
            });
        });
    });
    describe('Production environment', () => {
        beforeEach(() => {
            process.env.NODE_ENV = 'production';
            stub = sinon.stub(logFunction, 'logConsoleWithLog');
            stubFileLog = sinon.stub(logFunction, 'logFileWithLog');
            stubFileError = sinon.stub(logFunction, 'logFileWithError');
        });
        afterEach(() => {
            stub.restore();
            stubFileLog.restore();
            stubFileError.restore();
        });
        describe('It should never call logConsoleWithLog', () => {
            it('with logOutput = console and logType = log and some logPath', () => {
                // creating a stub
                log('Test message for console.log', 'console', 'log', 'somePath');
                expect(stub.called).to.be.false;
                expect(stubFileLog.calledOnce).to.be.true;
            });
            it('with logOutput = console and logType = log and logPath = undefined', () => {
                // creating a stub
                log('Test message for console.log', 'console', 'log');
                expect(stub.called).to.be.false;
                expect(stubFileLog.calledOnce).to.be.true;
            });
            it('with only message', () => {
                // creating a stub
                log('Test message for console.log');
                expect(stub.called).to.be.false;
                expect(stubFileLog.calledOnce).to.be.true;
            });
        });
        describe('It should never call logConsoleWithError', () => {
            it('with logOutput = console and logType = log', () => {
                // creating a stub
                let error = new Error('Testing a new error');
                log(error, 'console', 'error', '');
                expect(stub.called).to.be.false;
                expect(stubFileError.calledOnce).to.be.true;
            });
            it('with logOutput = console and logType = log and logPath = undefined', () => {
                // creating a stub
                let error = new Error('Testing a new error');
                log(error, 'console', 'error', undefined);
                expect(stub.called).to.be.false;
                expect(stubFileError.calledOnce).to.be.true;
            });
            it('with logOutput = console and logType = log and message instanceof Error', () => {
                // creating a stub
                let error = new Error('Testing a new error');
                log(error, 'console', 'log', '');
                expect(stub.called).to.be.false;
                expect(stubFileError.calledOnce).to.be.true;
            });
        });
        describe('Allways call logFile', () => {
            describe('When the message is an Error', () => {
                it('with logOutput = file ', () => {
                    // creating a stub
                    let error = new Error('Testing a new error');
                    log(error, 'file', 'error', '');
                    expect(stubFileError.called).to.be.true;
                    expect(stubFileError.calledOnce).to.be.true;
                });
                it('with logOutput = console', () => {
                    // creating a stub
                    let error = new Error('Testing a new error');
                    log(error, 'console', undefined, undefined);
                    expect(stubFileError.called).to.be.true;
                    expect(stubFileError.calledOnce).to.be.true;
                });
                it('with logOutput = console and logType = log', () => {
                    // creating a stub
                    let error = new Error('Testing a new error');
                    log(error, 'console', 'log', undefined);
                    expect(stubFileError.called).to.be.true;
                    expect(stubFileError.calledOnce).to.be.true;
                });
                it('with only a message', () => {
                    // creating a stub
                    let error = new Error('Testing a new error');
                    log(error, 'file', 'error', '');
                    expect(stubFileError.called).to.be.true;
                    expect(stubFileError.calledOnce).to.be.true;
                });
            });
            describe('When the message is a Log', () => {
                it('with logOutput = file ', () => {
                    // creating a stub
                    let error = 'Testing a new error';
                    log(error, 'file', 'log', '');
                    expect(stubFileLog.called).to.be.true;
                    expect(stubFileLog.calledOnce).to.be.true;
                });
                it('with logOutput = console', () => {
                    // creating a stub
                    let error = 'Testing a new error';
                    log(error, 'console', undefined, undefined);
                    expect(stubFileLog.called).to.be.true;
                    expect(stubFileLog.calledOnce).to.be.true;
                });
                it('with logOutput = console and logType = log', () => {
                    // creating a stub
                    let error = 'Testing a new error';
                    log(error, 'console', 'log', undefined);
                    expect(stubFileLog.called).to.be.true;
                    expect(stubFileLog.calledOnce).to.be.true;
                });
                it('with only a message', () => {
                    // creating a stub
                    let error = 'Testing a new error';
                    log(error, 'file', 'error', '');
                    expect(stubFileLog.called).to.be.true;
                    expect(stubFileLog.calledOnce).to.be.true;
                });
            });
        });
    });
});
