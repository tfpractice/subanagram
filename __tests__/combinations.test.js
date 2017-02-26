import 'jasmine-expect';
import { combine,combineLen,permLen,permute, } from 'src/combinations';

describe('permute', () => {
  describe('permute', () => {
    it('recursively combines a string and filters them by size exceeding 3  to prefix with it auto', () => {
      expect(permute('isolated')).toBeArray();
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
