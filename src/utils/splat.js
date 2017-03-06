import { split, uniq, } from './split';
import { join, } from './join';
import { cat, catBin, } from './cat';
import { diff,diffJoinBin,inter, union, unionJoinBin as unite, } from './compare';
import { add,addBin,addDiffBin,addSet,addSetBin, addUnion, addUnionBin, } from './add';
import { append,appendBin,appendDiff,appendDiffBin,appendSet, appendSetBin,appendUnion,appendUnionBin, } from './append';

export const splat = str => c => join(split(str).map(cat(c)));
export const splatBin = (str,c) => splat(str)(c);

export const mapCat = splat;

// export const splat = str => c => append(split(str).map(cat(c)).join())(str);
export const splAdd = str => c => append(splat(str)(c))(str);
export const splAddB = (str,c) => splAdd(str)(c);
export const splUnite = (str,c) => appendUnion(splat(str)(c))(str);

// export const splAdd = str => c => append(splat(str)(c))(str);

// console.log('splAdd(\'abc\')(\'v\')',splAdd('abc')('x'));

export const cross = s0 => s1 => split(s1).map(splat(s0)).join();

// 
export const crossW = s0 => s1 => split(s1).reduce(splAddB, s0);

// export const crossX = s0 => s1 => split(s0).reduce(splatBin, (add(s0)(s1)));
// export const crossY = s0 => s1 => split(s0).map(splat(s1)).reduce(appendUnionBin, chars(s1));
// 
console.log('crossX(\'abc\')(\'xyz\')', crossW('abc')('xyz'));

// console.log('crossX(\'abc\')(\'xyz\')', crossY('abc')('xyz'));

// export const crossB = s0 => s1 => split(s1).map(splat(s0)).join();

// .reduce(splatBin, s0);

// export const splatBin = (str ,chr) => splat(str)(chr);
// export const allSplat = str => (...chrs) => chrs.reduce(splatBin, str);

// export const cross = s
// export con
// const addUnion = (s0, s1) => 
// union(s0)(s1).concat(s1.split()).reduce(appendSetBin, s0);
// 
// export const mapCat = str => c => split(str).map(cat(c)).join();
// export const splat = str => c => 
//    split(mapCat(str)(c)).reduce(addUnion, cat(c)(str));
// 
// export const splatBin = (s0,c) => splat(s0)(c);
// 
