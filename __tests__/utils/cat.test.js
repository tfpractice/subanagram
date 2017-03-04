import 'jasmine-expect';
import { add, addBin, addSet, addSetBin,append,appendBin, cat, catBin, catSet, catSetBin, } from 'src/utils/cat';

const ab = 'ab';
const abc = 'abc'; 
const xy = 'xy';
const xyz = 'xyz'; 

describe('cat', () => {
  describe('cat', () => {
    it('concatenates a str with another', () => {
      expect(cat('b')('a')).toEqual('ab');
    });
  });
  describe('catBin', () => {
    it('concatenates a str with another', () => {
      expect(catBin('a', 'b')).toEqual('ab');
    });
  });
  describe('catSet', () => {
    it('concatenates a str with another', () => {
      expect(catSet('b')('ab')).toEqual('ab');
    });
  });
  describe('catSetBin', () => {
    it('concatenates a str with another', () => {
      expect(catSetBin('a', 'b')).toEqual('ab');
    });
  });
  describe('add', () => {
    it('splits a string and then appends a split version of another string', () => {
      expect(add(xy)(ab)).toEqual('a,b,x,y');
    });
  });
  describe('addBin', () => {
    it('splits a string and then appends a split version of another string', () => {
      expect(addBin(ab, xy)).toEqual('a,b,x,y');
    });
  });
  describe('addSet', () => {
    it('adds a unidque string to a string', () => {
      expect(addSet(xy)(ab)).toEqual('a,b,x,y');
    });
  });
  describe('addSet', () => {
    it('adds a unidque string to a string', () => {
      expect(addSetBin(ab, xy)).toEqual('a,b,x,y');
    });
  });
  describe('append', () => {
    it('appends a string to another without splitting', () => {
      expect(append(xy)(ab)).toEqual('ab,xy');
    });
  });  
  describe('append', () => {
    it('appends a string to another without splitting', () => {
      expect(appendBin(ab, xy)).toEqual('ab,xy');
    });
  });
  
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
