import 'jasmine-expect';
import { copy, copyBin, copyCat, } from 'src/utils/copy';

const abc = 'abc';

describe('copy', () => {
  describe('copy', () => {
    it('repeats a string agiven number of times', () => {
      expect(copy(2)(abc)).toEqual('abcabc');
    });
  });
  describe('copyBin', () => {
    it('repeats a string agiven number of times', () => {
      expect(copyBin(abc,2)).toEqual('abcabc');
    });
  });
  describe('copyCat', () => {
    it('returns an array of the str and its incrmemnting copies', () => {
      expect(copyCat(2)('a')).toEqual([ 'a','aa', ]);
    });
  });
});
