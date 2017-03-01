import 'jasmine-expect';
import { isEq,xEq, } from 'src/utils/compare';
describe('compare', () => {
  describe('isEq', () => {
    it('checks for equality of two primitives', () => {
      expect(isEq('a')('a')).toBeTrue();
      expect(isEq('a')('b')).toBeFalse(); 
    });
  });
  
  describe('xEq', () => {
    it('checks for non-equalitu betwen two primitives', () => {
      expect(xEq('a')('a')).toBeFalse();
      expect(xEq('a')('b')).toBeTrue(); 
    });
  });
});
