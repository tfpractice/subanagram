import 'jasmine-expect';
import { flatJoin,join,joinBin, } from 'src/utils/join';

const myJoin = [ 'a','b','cd','d', ];

describe('join', () => {
  describe('join', () => {
    it('takses an array and joins elements with  a comma string', () => {
      expect(join(myJoin)).toEqual('a,b,cd,d');
    });
  });
  describe('join', () => {
    it('takses an array and joins elements as one string', () => {
      expect(flatJoin(myJoin)).toEqual('abcdd');
    });
  });
  describe('joinBin', () => {
    it('joins two arrays', () => {
      console.log(joinBin(myJoin, myJoin));
    });
  });
});
