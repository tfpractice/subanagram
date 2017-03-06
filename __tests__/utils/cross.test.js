import 'jasmine-expect';
import { autoCross,cross,crossBin,crossSet,crossSetBin,permute, } from 'src/utils/cross';

// import { copy, copyBin, copyCat, } from 'src/utils/copy';

const ab = 'ab';
const xy = 'xy';
const abc = 'abc';
const xyz = 'xyz';
const mxyz = 'x,y,xy,zz';

// console.log(cross(ab)(mxyz));
// console.log(autoCross(abc));
console.log(permute(ab)(mxyz));
console.log(permute(ab)(xyz));
console.log(permute('ab,c')('xyz'));
describe('cross', () => {
  describe('cross', () => {
    it('maps each characted to a splat', () => {
      expect(cross(ab)(xy)).toEqual('ax,bx,ay,by');
    });
  });
  
  describe('crossBin', () => {
    it('maps each characted to a splat', () => {
      expect(crossBin(ab,'xy')).toEqual('ax,bx,ay,by');
    });
  });
  describe('crossSet', () => {
    it('maps each characted to a splat', () => {
      console.log(crossSet(ab)('xy,yba'));
      expect(crossSet(ab)(xy)).toEqual('ax,bx,ay,by');
    });
  });
  
  describe('crossSetBin', () => {
    it('maps each characted to a splat', () => {
      console.log(crossSetBin(ab,xy));
      expect(crossSetBin(ab,xy)).toEqual('ax,bx,ay,by');
    });
  });
});
