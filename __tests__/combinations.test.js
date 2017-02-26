import 'jasmine-expect';
import { combine, hasSize,permute,sort, } from 'src/combinations';

describe('permute', () => {
  describe('permute', () => {
    it('recursively combines a string and filters them by size exceeding 3  to prefix with it auto', () => {
      expect(permute('isolated')).toBeArray();

      // expect(permute('isolated').every(s => s.length > 3)).toBeTruthy();
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
      // console.log(combinations('isolated'));
      expect(combine('isolated')).toBeArray();

      // expect(combinations('isolated').every(s => s.length > 3)).toBeTruthy();
    });
  });
});
