import 'jasmine-expect';
import { addSplat,addSplatBin,addSplatSet,cross, mapCat,splat,splatBin,splatSet,splatSetBin, } from 'src/utils/splat';

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
      expect(splat(ab)(x)).toEqual('ax,bx');
    });
  });

  describe('splatBin', () => {
    it('splits a string and concatenates each of its elements', () => {
      expect(splatBin('ab','x')).toEqual('ax,bx');
    });
  });
  describe('splatSet', () => {
    it('returns a non repeats concatenatio', () => {
      expect(splatSet(abc)(x)).toEqual('ax,bx,cx');
      expect(splatSet(abc)('abc')).toEqual('abc,bac,cab');
    });
  }); describe('splatSetBin', () => {
    it('returns a non repeats concatenatio', () => {
      expect(splatSetBin(abc,x)).toEqual('ax,bx,cx');
    });
  });
  describe('addSplat', () => {
    it('adds the splat string to the original', () => {
      expect(addSplat(x)(ab)).toEqual('a,b,ax,bx');
    });
  });
  describe('addSplatBin', () => {
    it('adds the splat string to the original', () => {
      expect(addSplatBin(ab,x)).toEqual('a,b,ax,bx');
    });
  });
  describe('addSplatSet', () => {
    it('adds the splat string to the original', () => {
      expect(addSplatSet(x)(ab)).toEqual('a,b,ax,bx');
    });
  });
});
