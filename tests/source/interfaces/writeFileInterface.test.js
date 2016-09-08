/* eslint-env mocha */
import { expect } from 'chai';
import sinon from 'sinon';
import { writeLog } from '../../../source/interfaces/writeFileInterface';
import * as fs from 'fs';

let stub;
describe('Test the writeing interface', () => {
    beforeEach(() => {

    });
    afterEach(() => {
        stub.restore();
    });
    it('should return true', () => {
        stub = stub = sinon.stub(fs, 'appendFile').returns(true);
        writeLog('some message1');
        //  console.log('result ' + result);
        //  expect(stub.called).to.be.true;
        //  stub.restore();
    });
});
