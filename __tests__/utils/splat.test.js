import 'jasmine-expect';
import { cross, mapCat,splat, } from 'src/utils/splat';

// import { allSplat,,mapCat,,splatBin, } from 'src/utils/splat';
const [ a,b,c,x,y,z, ] = [ 'a','b','c','x','y','z', ];
const ab = 'ab';
const xy = 'xy';
const abc = 'abc';
const xyz = 'xyz';

console.log('mapCat(ab)(x)',mapCat(ab)(x));
console.log('splat(ab)(x)',splat(ab)(x));
console.log('cross(ab)(x)',cross(abc)(xyz));
console.log('cross(abc)(\'x,y\')',cross(abc)('x,yz'));

describe('splat', () => {
  describe('mapCat', () => {
    it('splits a string and concatenates each of its elements', () => {
      expect(mapCat(ab)(x)).toEqual('ax,bx');
    });
  });

  describe('splat', () => {
    it('splits a string and concatenates each of its elements', () => {

      // console.log(splat('a,bc')(xy));

      // expect(splat(ab)(x)).toEqual('xa,xb');
    });
  });

//   describe('splatBin', () => {
//     it('splits a string and concatenates each of its elements', () => {
//       // expect(splatBin('a,b','x')).toEqual('xa,xb');
//     });
//   });
//   describe('repeat', () => {
//     it('repeats a string a given number of times', () => {
//       // expect(repeat(2)('ab')).toEqual('abab');
//     });
//   });
});
