import 'jasmine-expect';
import { add,addBin,addDiff,addDiffBin,addSet, addSetBin,addUnion, } from 'src/utils/add';

const ab = 'ab';
const abc = 'abc'; 
const xy = 'xy';
const xyz = 'xyz'; 
const mxyz = 'x, xy, zz';

// console.log((add(xy)(abc)));

// console.log((addBin(ab, xy)));
// console.log((addSet(mxyz)(ab)));

// console.log((addSetBin(ab, mxyz)));
// console.log(addSetBin(ab, xyz));
// console.log(addSetBin(xyz,ab));
// console.log(addDiffBin(ab, xyz)); 
// console.log(addDiffBin(xyz, ab));

// console.log('+++++++======++++++');
// 
// console.log(addSetBin(ab, mxyz));

// console.log(addSetBin(mxyz, ab));

// console.log('addDiff(ab)(mxyz)',addDiff(ab)(mxyz));
// console.log('addDiff(mxyz)(ab)',addDiff(mxyz)(ab));
// console.log('addUnion',addUnion(mxyz)(ab));
// console.log('addUnion',addUnion(ab)(mxyz));

// console.log(addDiffBin(mxyz, ab));
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
