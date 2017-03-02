import 'jasmine-expect';
import { comma, has, idx, xHas, } from 'src/utils/has';
console.log('ab,cf,dd,s,e,r'.replace(/\W/g,'_'));
console.log('ab,cf,dd,s,d,d,e,r'.replace(/d+/g,'_'));
describe('has', () => {
  describe('has', () => {
    it('checks for equality of two primitives', () => {
      expect(has('a')('a')).toBeTrue();
      expect(has('a')('b')).toBeFalse(); 
    });
  });
  
  describe('xhas', () => {
    it('checks for non-equalitu betwen two primitives', () => {
      expect(xHas('a')('a')).toBeFalse();
      expect(xHas('a')('b')).toBeTrue(); 
    });
  });
  describe('idx', () => {
    it('returns the index of an element in a string', () => {
      expect(idx('a')('bca')).toEqual(2);
    });
  });
  describe('comma', () => {
    it('checks for a comma ', () => {
      expect(comma('a,b,c')).toBeTrue();
      expect(comma('abc')).toBeFalse();
    });
  });
});
