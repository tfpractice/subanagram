import 'jasmine-expect';
import { add,addBin,addDiff,addDiffBin,addSet, addSetBin,addUnion, } from 'src/utils/add';

const ab = 'ab';
const abc = 'abc'; 
const xy = 'xy';
const xyz = 'xyz'; 
const mxyz = 'x, xy, zz';

describe('add', () => {
  describe('add', () => {
    it('splits a string and then appends a split version of another string', () => {
      expect(add(xy)(ab)).toEqual('a,b,x,y');
    });
  });
  describe('addBin', () => {
    it('splits a string and then appends a split version of another string', () => {
      expect(addBin(ab, xy)).toEqual('a,b,x,y');
    });
  });
  describe('addSet', () => {
    it('adds a unidque string to a string', () => {
      expect(addSet(xy)(ab)).toEqual('a,b,x,y');
    });
  });
  describe('addSet', () => {
    it('adds a unidque string to a string', () => {
      expect(addSetBin(ab, xy)).toEqual('a,b,x,y');
    });
  }); describe('addDiff', () => {
    it('adds a unidque string to a string', () => {
      expect(addDiff(xy)(ab)).toEqual('a,b,x,y');
    });
  });
  describe('addDiff', () => {
    it('adds a unidque string to a string', () => {
      expect(addDiffBin(ab, xy)).toEqual('a,b,x,y');
    });
  });
});
