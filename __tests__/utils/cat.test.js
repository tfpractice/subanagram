import 'jasmine-expect';
import { allSplat, cat,catBin, cross,cross2,crossBin,crossCat, crossCatAll,repeat, reps, splat,splatBin, } from 'src/utils/cat';

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

  // describe('splat', () => {
  //   it('splits a string and concatenates each of its elements', () => {
  //     expect(splat('a,b')('x')).toEqual('xa,xb');
  //   });
  // });
  // describe('splatBin', () => {
  //   it('splits a string and concatenates each of its elements', () => {
  //     expect(splatBin('a,b','x')).toEqual('xa,xb');
  //   });
  // });
  // describe('repeat', () => {
  //   it('repeats a string a given number of times', () => {
  //     expect(repeat(2)('ab')).toEqual('abab');
  //   });
  // });
  // describe('reps', () => {
  //   it('generates an array if orogressive repetitions', () => {
  //     expect(reps(3)('ab')).toEqual('ab,abab,ababab');      
  //   });
  // });
  // describe('cross', () => {
  //   it('combines two strings', () => {
  //     console.log('alllb'.replace(/(l*)/, 'l'));
  // 
  //     console.log('cross',cross('abc')('xyz'));
  //     console.log('cross2',cross2('abc')('xyz'));
  //   });
  // });
});
