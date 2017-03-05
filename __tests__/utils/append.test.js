import 'jasmine-expect';
import { append,appendBin,appendDiff,appendDiffBin,appendSet,appendSetBin, appendUnion,appendUnion2, } from 'src/utils/append';

const ab = 'ab';
const abc = 'abc'; 
const xy = 'xy';
const xyz = 'xyz'; 
const mxyz = 'x,xy,zz';

// console.log((append(xy)(abc)));

// // console.log((appendSet(xy)(abc)));
// // console.log((appendSet(abc)(xy)));
// // console.log((appendDiff(xy)(abc)));
// 
// // // console.log((appendDiff(abc)(xy)));
// // // console.log((appendDiff(xy)(abc)));
// // // console.log((appendDiff(abc)(xy)));
// console.log(appendUnion(mxyz)(abc));
// console.log(appendUnion(abc)(mxyz));
describe('append', () => {
  describe('append', () => {
    it('joins an array of two strings', () => {
      expect(append(xy)(ab)).toEqual('a,b,x,y');
    });
  });
  describe('appendBin', () => {
    it('joins an array of two strings', () => {
      expect(appendBin(ab, xy)).toEqual('a,b,x,y');
    });
  });
  describe('appendSet', () => {
    it('appends a unique string to a string', () => {
      expect(appendSet(xy)(ab)).toEqual('a,b,x,y');
    });
  });
  describe('appendSet', () => {
    it('appends a unidque string to a string', () => {
      expect(appendSetBin(ab, xy)).toEqual('a,b,x,y');
    });
  }); describe('appendDiff', () => {
    it('appends a unidque string to a string', () => {
      expect(appendDiff(xy)(ab)).toEqual('a,b,x,y');
    });
  });
  describe('appendDiff', () => {
    it('appends a unidque string to a string', () => {
      expect(appendDiffBin(ab, xy)).toEqual('a,b,x,y');
    });
  });
});
