import 'jasmine-expect';
import { diff,diffBin, diffJoin,diffJoinBin, inter,isEq,union,unionBin,
unionJoin,unionJoinBin,xEq, } from 'src/utils/compare';
const abc = 'abc';
const x = 'x';
const y = 'y';
const xyz = 'xyz';

describe('compare', () => {
  describe('isEq', () => {
    it('checks for equality of two primitives', () => {
      expect(isEq('a')('a')).toBeTrue();
      expect(isEq('a')('b')).toBeFalse(); 
    });
  });
  
  describe('xEq', () => {
    it('checks for non-equalitu betwen two primitives', () => {
      expect(xEq('a')('a')).toBeFalse();
      expect(xEq('a')('b')).toBeTrue(); 
    });
  });
  describe('diff', () => {
    it('returns chars in the first string absent from the second', () => {
      expect(diff(abc)(xyz)).toEqual([ ...abc, ]);
      expect(diff('x,yy,z')(xyz)).toEqual([ 'yy', ]);
      expect(diff(xyz)('x,yy,z')).toEqual([ ]);
    });
  });
  describe('diffBin', () => {
    it('invokes diff as a binary function', () => {
      expect(diffBin(abc,xyz)).toEqual([ ...abc, ]);
      expect([ ...xyz, ].reduce(diffJoinBin,abc)).toEqual('a,b,c');
    });
  });
  describe('inter', () => {
    it('returns the shared elements of a string', () => {
      expect(inter(abc)('a,c')).toEqual('ac'.split(''));
    });
  });
  describe('union', () => {
    it('returns all of the eleemnts of both strings', () => {
      expect(union(xyz)('x,yy,z')).toEqual([ 'x', 'y', 'z', 'yy', ]);
    });
  });
});
