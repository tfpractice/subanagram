import 'jasmine-expect';
import { allFreq,catBin,chars, drop, equiv, exceeds, exclude,
   fMap, freq,genRep,hasSize, isNot, sort, splat, splatBin, split, strSet, } from 'src/utils';

describe('utils', () => {
  describe('split', () => {
    it('splits a string into an array', () => {
      expect(split('bread')).toBeArray();      
    });
  });
  describe('equiv', () => {
    it('checks if two elements are equal', () => {
      expect(equiv('a')('a')).toBeTrue();
      expect(equiv('a')('b')).toBeFalse();
    });
  });
  describe('exclude', () => {
    it('returns a string with a characted dropped', () => {
      expect(exclude('b')('abc')).toEqual('ac');
    });
  });
  describe('exceeds', () => {
    it('checks if the lenght of a string is greater than a min', () => {
      expect(exceeds(4)('hello')).toBeTruthy(); 
      expect(exceeds(4)('hell')).toBeFalsy(); 
    });
  });
  describe('sort', () => {
    it('splits a string and joins the sorted elements', () => {
      expect(sort('dcba')).toEqual('abcd');
    });
  });
  describe('hasSize', () => {
    it('checks if the size of a string matchs a given length', () => {
      expect(hasSize(3)('oat')).toBeTruthy();
    });
  });
  describe('drop', () => {
    it('returns a string with a character removed', () => {
      expect(drop('c')('abc')).toEqual('ab');
    });
  });
  describe('chars', () => {
    it('returns the characters in a string', () => {
      expect(chars('a,b,c,d,ab, aa')).toEqual([ 'a', 'b', 'c', 'd', ]);
    });
  });
  describe('freq', () => {
    it('creates a string of each character repeated ', () => {
      expect(freq('abbc')('b')).toBeNumber();
    });
  });
  describe('fMap', () => {
    it('returns a string of each character mapped to the freq function', () => {
      console.log('fMap',fMap('abccbcd'));

      // expect(fMap('abccbcd')).toEqual('abbcccd');
    });
  });
  describe('strSet', () => {
    it('returns a set of the split string', () => {
      expect(strSet('abbcdcc')).toBe('a,b,c,d');
    });
  });
  
  describe('splat', () => {
    it('splits and concats two strings', () => {
      console.log('chars',chars('a,b,c,d,ab, aa'));
      console.log('freq',freq('abbc')('b'));
      console.log('strSet',strSet('abbcdcc'));
      console.log('allFreq',(allFreq('abbcdcc')));
      console.log('splatBin',splatBin('a,b,c,b','a'));
      console.log('catBin',catBin('a,b,c,b','a'));
      console.log('genRep',genRep('ab',3));
      console.log('splat',splat('abc')('d,dd'));

      // expect(splat('abc')('d,dd')).toEqual('a,b,c,d,dd');
    });
  });
});
