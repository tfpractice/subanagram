import 'jasmine-expect';
import { alpha,alphStr,chars,charSet,lower,split, } from 'src/utils/split';

const myAlp = 'a,bb,c';
const myStr = 'abc';

describe('split', () => {
  describe('alpha', () => {
    it('returns an array of a strings alphaNumeric characters', () => {
      console.log(alpha(myAlp));
      expect(alpha(myAlp)).toEqual([ 'a','bb','c', ]);
    });
  });
  describe('alphStr', () => {
    it('drops all nonAlpha characters from a stirng', () => {
      console.log(alphStr(myAlp));
    });
  });
  describe('chars', () => {
    it('returns an array of single character strings', () => {
      console.log(chars(myAlp));
      expect(chars(myAlp)).toEqual([ 'a','b','b','c', ]);
    });
  });
  describe('charSet', () => {
    it('returns an array of the strings characters', () => {
      console.log(charSet(myAlp));
      expect(charSet(myAlp)).toEqual(myStr);
    });
  });
});
