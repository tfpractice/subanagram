import 'jasmine-expect';
import { drop,replace,replaceAll, } from 'src/utils/replace';

const myRep = [ 'a','b','cd','d','aa','ba', ].join();

describe('replace', () => {
  describe('replace', () => {
    it('takses an array and joins elements with  a comma string', () => {
      expect(replace(myRep)('aa')('a')).toEqual('aa,b,cd,d,aa,ba');
    });
  });
  describe('join', () => {
    it('takses an array and joins elements as one string', () => {
      expect(replaceAll(myRep)('aa')('a')).toEqual('aa,b,cd,d,aaaa,baa');
    });
  });
  describe('drop', () => {
    it('drops a character from a string', () => {
      // expect(drop('a')(myRep)).toEqual('b,cd,d,b');
    });
  });
});
