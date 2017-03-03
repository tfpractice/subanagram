import 'jasmine-expect';
import { add,addBin,addSet,addSetBin,append,appendBin,cat,catBin, } from 'src/utils/cat';

const ab = 'ab';
const abc = 'abc'; 
const xy = 'xy';
const xyz = 'xyz'; 

fdescribe('cat', () => {
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
  describe('add', () => {
    it('splits a string and then appends another string', () => {
      expect(add(ab)(xy)).toEqual('a,b,xy');
    });
  });
  describe('addBin', () => {
    it('splits a string and then appends another string', () => {
      expect(addBin(ab,xy)).toEqual('a,b,xy');
    });
  });
  describe('addSet', () => {
    it('adds a unidque string to a string', () => {
      expect(addSet(ab)(xy)).toEqual('a,b,xy');
    });
  });
  describe('addSet', () => {
    it('adds a unidque string to a string', () => {
      expect(addSetBin(ab,xy)).toEqual('a,b,xy');
    });
  });
  describe('append', () => {
    it('appends a string to another without splitting', () => {
      expect(append(ab)(xy)).toEqual('ab,xy');
    });
  });  
  describe('append', () => {
    it('appends a string to another without splitting', () => {
      expect(appendBin(ab,xy)).toEqual('ab,xy');
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
