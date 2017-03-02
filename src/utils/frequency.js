import { catBin, chars, charSet, isEq,join,reps,split, } from './index';

export const flatBin = (a = [],b = []) => [ ...a,...b, ];
export const freq = c => str => split(str).filter(isEq(c)).length;
export const genFreq = str => c => reps(freq(c)(str))(c);

export const freqMap = str => charSet(str).map(genFreq(str)).reduce(catBin,[]);
export const freqStr = str => join(freqMap(str));
export const allFreq = str => freqMap(str).join();
