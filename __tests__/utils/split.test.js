import 'jasmine-expect';
import { alpha,alphStr,chars,charSet,lower,split, } from 'src/utils/split';

const myAlp = 'a,bb,c';
const myStr = 'abc';

describe('split', () => {
  describe('alpha', () => {
    it('returns an array of a strings alphaNumeric characters', () => {
      expect(alpha(myAlp)).toEqual([ 'a','bb','c', ]);
    });
  });
  describe('alphStr', () => {
    it('drops all nonAlpha characters from a stirng', () => {
      expect(alphStr(myAlp)).toEqual('abbc');
    });
  });
  describe('chars', () => {
    it('returns an array of single character strings', () => {
      expect(chars(myAlp)).toEqual([ 'a','b','b','c', ]);
    });
  });
  describe('charSet', () => {
    it('returns an array of the strings characters', () => {
      expect(charSet(myAlp)).toEqual(chars(myStr));
    });
  });
  describe('split', () => {
    it('splits a string to its consituent values', () => {
      expect(split(myAlp)).toEqual([ 'a','bb','c', ]);
      expect(split(myStr)).toEqual([ 'a','b','c', ]);
    });
  });
});
