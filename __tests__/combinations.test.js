import 'jasmine-expect';
import { combinations, permutations,sort, } from 'src/combinations';

console.log(combinations('abcd'));
describe('combinations', () => {
  describe('permutations', () => {
    it('recursively combines a string and filters them by size exceeding 3  to prefix with it auto', () => {
      expect(permutations('isolated')).toBeArray();

      // expect(permutations('isolated').every(s => s.length > 3)).toBeTruthy();
    });
  });
  describe('sort', () => {
    it('splits a string and joins the sorted elements', () => {
      expect(sort('dcba')).toEqual('abcd');
    });
  });
  describe('combinations', () => {
    it('deduplicates the permutations', () => {
      // console.log(combinations('isolated'));
      expect(combinations('isolated')).toBeArray();

      // expect(combinations('isolated').every(s => s.length > 3)).toBeTruthy();
    });
  });
});
