import 'jasmine-expect';
import { exceeds,hasSize,size,under, } from 'src/utils/size';

const myStr = 'abc';

describe('size', () => {
  describe('size', () => {
    it('returns the length of a strnig', () => {
      expect(size(myStr)).toEqual(3);  
    });
  });
  describe('hasSize', () => {
    it('checks if the strings size equals a given number', () => {
      expect(hasSize(3)(myStr)).toBeTrue();
      expect(hasSize(2)(myStr)).toBeFalse();
    });
  });
  describe('exceeds', () => {
    it('checks if a collections lenght is greater than a given num', () => {
      expect(exceeds(2)(myStr)).toBeTrue();
      expect(exceeds(3)(myStr)).toBeFalse();
    });
  });
  describe('under', () => {
    it('checks if a collections lenght is greater than a given num', () => {
      expect(under(4)(myStr)).toBeTrue();
      expect(under(3)(myStr)).toBeFalse();
    });
  });
});
