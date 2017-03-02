import { alpha, chars, sortSet,split, uniq, } from './split';
import { sort, } from 'module';

export const flatJoin = arr => arr.join('');

export const join = arr => arr.join();
export const joinBin = (a0, a1) => join([ ...a0, ...a1, ]);

export const jnAlpha = str => join(split(str));
export const jnChar = str => join(chars(str));

// export const jnSelf = str => join(split(str));
export const jnSet = str => join(uniq(str));
export const jnSort = str => join(sortSet(str));

// 
