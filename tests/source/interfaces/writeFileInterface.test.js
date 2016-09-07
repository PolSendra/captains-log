/* eslint-env mocha */
import { expect } from 'chai';
import { writeLog } from '../../source/interfaces/writeFileInterface.test';

describe('Test the writeing interface', () => {
    it('should return true', () => {
        let result = writeLog('some message');
        expect(result).to.be.true;
    });
});
