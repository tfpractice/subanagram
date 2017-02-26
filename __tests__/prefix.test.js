import 'jasmine-expect';
import { prefix, prefixAll, prefixBin, prefixes, prefixMap, prefixMapBin, split, } from 'src/prefix';

describe('utils', () => {
  describe('split', () => {
    it('splits a string into an array', () => {
      expect(split('bread')).toBeArray();      
    });
  });
  describe('prefix', () => {
    it('cocatenates two strings', () => {
      expect(prefix('a')('b')).toEqual('ab');
    });
  }); describe('prefixBin', () => {
    it('cocatenates two strings', () => {
      expect(prefixBin('a', 'b')).toEqual('ba');
    });
  });
  describe('prefixAll', () => {
    it('splits a atring and prefixs each value ', () => {
      expect(prefixAll('abc')('b')).toBeArray();
    });
  });
  describe('prefixMap', () => {
    it('maps an array to a prefix', () => {
      expect(prefixMap(split('abc'))('b')).toBeArray();
    });
  });
  describe('prefixMapBin', () => {
    it('maps an array to a prefix', () => {
      expect(prefixMapBin(split('abc'), 'b')).toBeArray();
    });
  });
  describe('prefixes', () => {
    it('applies multiple prefixes to a string', () => {
      console.log(prefixes('abc')('b', 'f', 'h'));
      
      // expect(prefixes('abc')('b','f','h')).toBeArray();
    });
  });
});
