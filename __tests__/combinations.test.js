import 'jasmine-expect';
import { combine,combineLen, hasSize,permLen,permute,sort, } from 'src/combinations';

describe('permute', () => {
  describe('permute', () => {
    it('recursively combines a string and filters them by size exceeding 3  to prefix with it auto', () => {
      expect(permute('isolated')).toBeArray();
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
  describe('combine', () => {
    it('deduplicates the permute', () => {
      expect(combine('isolated')).toBeArray();
    });
  });
  describe('combineLen', () => {
    it('deduplicates the permute', () => {
      console.log(combineLen(11)('isolated'));
      expect(combineLen(4)('isolated')).toBeArray();
    });
  });
});
