import 'jasmine-expect';
import { split, } from 'src/utils';
import { autoPrefix, exPref, prefix, prefixAll, prefixBin, prefixes, prefixMap,
   prefixMapBin, } from 'src/prefix';

describe('utils', () => {
  describe('prefix', () => {
    it('cocatenates two strings', () => {
      expect(prefix('a')('b')).toEqual('ab');
    });
  });
  describe('exPref', () => {
    it('cocatenates two strings', () => {
      expect(exPref('a')('b')).toEqual('ab');
    });
  });
  describe('prefixBin', () => {
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
      expect(prefixMapBin(split('abchccbhb'), 'b')).toBeArray();
    });
  });
  describe('prefixes', () => {
    it('maps an array to multiple prefixes', () => {
      expect(prefixes([ 'abc', 'abc', 'abc', ])('b', 'f', 'h')).toBeArray();
    });
    describe('autoPrefix', () => {
      it('recursively combines a string to prefix with itauto', () => {
        expect(autoPrefix('isolated')).toBeArray();
      });
    });
  });
});
