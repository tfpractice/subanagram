import 'jasmine-expect';
import { allFreq,freq,freqMap,freqStr,genFreq, } from 'src/utils/frequency';

describe('frequency', () => {
  describe('freq', () => {
    it('returns the frequency of a substring', () => {
      expect(freq('a')('ab,a,c,aa,av')).toEqual(1);
    });
  });
  describe('genFreq', () => {
    it('generates an array of repetitions for a given freqMap', () => {
      expect(genFreq('abcbabd')('b')).toEqual('b,bb,bbb');
    });
  });
  describe('freqMap', () => {
    it('maps each character to its frequency', () => {
      console.log(freqMap('abaabb'));
      expect(freqMap('abaabb')).toBeArray(
      );
    });
  });
});
