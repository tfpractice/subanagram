import { chars,charSet,cSet,exceeds,jnSet,join, split, strSet,uniq, } from './index';
import { diff,has,inter, union, } from './compare';
import { alpha, alphStr, } from './split';
import { cJoin,flatJoin, } from './join';

export const add = y => x => join([ ...split(x),...split(y), ]);
export const addBin = (x, y) => add(y)(x);

export const addSet = y => x => join(uniq(add(y)(x)));
export const addSetBin = (x, y) => addSet(y)(x);
export const addDiff = y => x => diff(y)(x).reduce(addSetBin, x);
export const addDiffBin = (x, y) => addDiff(y)(x);
export const addUnion = y => x => union(y)(x).reduce(addSetBin, x);
export const addUnionBin = (x, y) => addUnion(y)(x);
