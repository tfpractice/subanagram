import { append,cat, } from './cat';

export const copy = times => str => str.repeat(times);
export const copyBin = (str, idx) => copy(idx)(str);
export const copyCat = (t = 0) => s => Array(t + 1).fill(s).map(copyBin).slice(1);
