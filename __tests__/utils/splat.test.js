import 'jasmine-expect';
import { allSplat,cross,mapCat,splat,splatBin, } from 'src/utils/splat';
const [ a,b,c,x,y,z, ] = [ 'a','b','c','x','y','z', ];
const ab = 'ab';
const xy = 'xy';
const abc = 'abc';
const xyz = 'xyz';

describe('splat', () => {
  describe('mapCat', () => {
    it('splits a string and concatenates each of its elements', () => {
      expect(mapCat(ab)(x)).toEqual('xa,xb');
    });
  });
  describe('splat', () => {
    it('splits a string and concatenates each of its elements', () => {
      console.log(splat(ab)(xy));
      console.log(splat('a,bc')(xy));
      console.log(cross(abc)(xyz));

      // expect(splat(ab)(x)).toEqual('xa,xb');
    });
  });
  describe('splatBin', () => {
    it('splits a string and concatenates each of its elements', () => {
      // expect(splatBin('a,b','x')).toEqual('xa,xb');
    });
  });
  describe('repeat', () => {
    it('repeats a string a given number of times', () => {
      // expect(repeat(2)('ab')).toEqual('abab');
    });
  });
});
