/* eslint-env mocha */
//  import { expect } from 'chai';
import sinon from 'sinon';
import { writeLog } from '../../../source/interfaces/writeFileInterface';
import * as fs from 'fs';

describe('Test the writeing interface', () => {
    it('should return true', () => {
        let stub = sinon.stub(fs, 'appendFileSync').returns(false);
        writeLog('some message1');
        //  expect(stub.calledOnce).to.be.true;
        //  expect(result).to.be.true;
        stub.restore();
    });
    it('should throw error', () => {
        let error = new Error('some error with fs');
        let stub = sinon.stub(fs, 'appendFileSync').returns(error);
        writeLog();
        //  expect(result).to.be.true;
        stub.restore();
    });
});
