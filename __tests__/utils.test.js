import 'jasmine-expect';
import { chars,drop, equiv,exceeds,exclude, hasSize, isNot,sort, split, } from 'src/utils';

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
      console.log(chars('a,b,c,d,ab, aa'));
      expect(chars('a,b,c,d,ab, aa')).toEqual([ 'a','b','c','d', ]);
    });
  });
});
