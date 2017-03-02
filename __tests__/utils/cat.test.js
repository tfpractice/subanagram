import 'jasmine-expect';
import { cat, catBin, splat, splatBin, } from 'src/utils/cat';

describe('cat', () => {
  describe('cat', () => {
    it('concatenates a str with another', () => {
      expect(cat('a')('b')).toEqual('ab');
    });
  });
  describe('catBin', () => {
    it('concatenates a str with another', () => {
      expect(catBin('a','b')).toEqual('ab');
    });
  });
  describe('splat', () => {
    it('splits a string and concatenates each of its elements', () => {
      expect(splat('a,b')('x')).toEqual('xa, xb');
    });
  });
});
