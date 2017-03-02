import 'jasmine-expect';
import { flatJoin,join, } from 'src/utils/join';

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
});
