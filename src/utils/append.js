import { chars,charSet,cSet,exceeds,jnSet,join, split, strSet,uniq, } from './index';
import { diff,has,inter, union, } from './compare';
import { alpha, alphStr, } from './split';
import { cJoin,flatJoin, } from './join';

export const append = y => x => join([ x,y, ]);
export const appendBin = (x, y) => append(y)(x);

export const appendSet = y => x => join(uniq(append(y)(x)));
export const appendSetBin = (x, y) => appendSet(y)(x);

export const appSelf = x => appendSet(uniq(x))(x);

export const appendDiff = y => x => diff(y)(x).reduce(appendSetBin, x);
export const appendDiffBin = (x, y) => appendDiff(y)(x);

export const appendUnion = y => x => join(uniq(append(union(x)(y))(x)));
export const appendUnionBin = (x, y) => appendUnion(y)(x);
