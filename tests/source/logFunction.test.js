/* eslint-env mocha */
import { expect } from 'chai';
import sinon from 'sinon';
import * as writeInterface from '../../source/interfaces/writeFileInterface';
import { logConsoleWithLog,
            logConsoleWithError,
            logFileWithLog,
            logFileWithError
        } from '../../source/logFunction.js';

describe('Test the log functions', () => {
    describe('Tests the console writeing log funcitons', () => {
        describe('logConsoleWithLog', () => {
            it('should logPath is undefined and message', () => {
                let result = logConsoleWithLog(undefined, 'missatge');
                expect(result).to.be.true;
            });
            it('should logPath is defined and message', () => {
                let result = logConsoleWithLog('some path', 'missatge');
                expect(result).to.be.true;
            });
        });
        describe('logConsoleWithError', () => {
            let error = new Error('some test error');
            it('should logPath is undefined and Error message', () => {
                let result = logConsoleWithError(undefined, error);
                expect(result).to.be.true;
            });
            it('should logPath is defined and Error message', () => {
                let result = logConsoleWithError('some path', error);
                expect(result).to.be.true;
            });
        });
    });
    describe('Tests the file writeing log funcitons', () => {
        let stubWriteFile;
        beforeEach(() => {
            stubWriteFile = sinon.stub(writeInterface, 'writeLog').returns(true);
        });
        afterEach(() => {
            stubWriteFile.restore();
        });
        describe('logFileWithLog', () => {
            it('should return true with logPath is undefined and string message', () => {
                let result = logFileWithLog(undefined, 'some error text');
                expect(result).to.be.true;
                expect(stubWriteFile.calledOnce).to.be.true;
            });
            it('should return true with logPath is defined and string message', () => {
                let result = logFileWithLog('some path', 'some error text');
                expect(result).to.be.true;
                expect(stubWriteFile.calledOnce).to.be.true;
            });
        });
        describe('logFileWithError', () => {
            let error = new Error('some test error');

            it('should return true with logPath is undefined and Error message', () => {
                let result = logFileWithError(undefined, error);
                expect(result).to.be.true;
                expect(stubWriteFile.calledOnce).to.be.true;
            });
            it('should return true with logPath is defined and message', () => {
                let result = logFileWithError('some path', error);
                expect(result).to.be.true;
                expect(stubWriteFile.calledOnce).to.be.true;
            });
        });
    });
});
