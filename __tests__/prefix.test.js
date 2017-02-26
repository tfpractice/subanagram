import 'jasmine-expect';
import { combinations,prefix,prefixAll, prefixBin, prefixes, prefixMap, 
  prefixMapBin, selfPrefix, split, } from 'src/prefix';
import { find, } from 'src/find';

find('braed').then(console.log);

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
    it('maps an array to multiple prefixes', () => {
      expect(prefixes([ 'abc','abc','abc', ])('b','f','h')).toBeArray();
    });
    describe('combinations', () => {
      it('recursively combines a string to prefix with itself', () => {
        expect(combinations('bread')).toBeArray();
      });
    });
  });
});
