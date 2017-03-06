import { split, uniq, } from './split';
import { join, } from './join';
import { cat, catBin,catSet, } from './cat';
import { diff,diffJoinBin,inter, union, unionJoinBin as unite, } from './compare';
import { add,addBin,addDiffBin,addSet,addSetBin, addUnion, addUnionBin, } from './add';
import { append,appendBin,appendDiff,appendDiffBin,appendSet, appendSetBin,appendUnion,appendUnionBin, } from './append';

export const splat = str => c => join(split(str).map(cat(c)));
export const splatBin = (str,c) => splat(str)(c);

export const splatSet = str => c => join(split(str).map(catSet(c)));
export const splatSetBin = (str,c) => splat(str)(c);

export const addSplat = y => x => add(splat(x)(y))(x);
export const addSplatBin = (x,y) => addSplat(y)(x);
export const mapCat = splat;

export const addSplatSet = y => x => join(uniq(addSplat(y)(x)));
export const splAdd = str => c => append(splat(str)(c))(str);
export const splAddB = (str,c) => splAdd(str)(c);
export const splUnite = (str,c) => appendUnion(splat(str)(c))(str);

export const cross = s0 => s1 => split(s1).map(splat(s0)).join();
