import 'jasmine-expect';
import { prefix, prefixAll,split, } from 'src/prefix';

describe('utils', () => {
  describe('split', () => {
    it('splits a string into an array', () => {
      expect(split('bread')).toBeArray();      
    });
  });
  describe('prefix', () => {
    it('prefixenates two strings', () => {
      expect(prefix('a')('b')).toEqual('ab');
    });
  });
  describe('prefixAll', () => {
    it('splits a atring and prefixs each value ', () => {
      expect(prefixAll('abc')('b')).toBeArray();
    });
  });
});
