/* eslint-env mocha */
import { expect } from 'chai';
import sinon from 'sinon';
import { writeLog } from '../../../source/interfaces/writeFileInterface.js';
import fs from 'fs';

describe('Test the writeing interface', () => {
    let stub;
    beforeEach(() => {
        stub = sinon.stub(fs, 'appendFile');
    });
    afterEach(() => {
        stub.restore();
    });
    it('should return true', () => {
        stub.returns(false);
        writeLog('some message1');
        expect(stub.calledOnce).to.be.true;
        //  expect(result).to.be.true;
    });
    it('should throw error', () => {
        let error = new Error('some error with fs');
        stub.returns(error);
        writeLog();
        expect(stub.calledOnce).to.be.true;
    });
});
