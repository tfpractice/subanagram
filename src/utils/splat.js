import { split, uniq, } from './split';
import { join, } from './join';
import { add,addBin,addSetBin,append,appendBin,appendSet,appendSetBin, cat, catBin, } from './cat';
import { diff,diffJoinBin,inter, union, unionJoinBin as unite, } from './compare';

const addUnion = (s0, s1) => 
union(s0)(s1).concat(s1.split()).reduce(appendSetBin, s0);

export const mapCat = str => c => split(str).map(cat(c)).join();
export const splat = str => c => 
   split(mapCat(str)(c)).reduce(addUnion, cat(c)(str));

export const splatBin = (s0,c) => splat(s0)(c);

export const cross = s0 => s1 => split(s1).reduce(splatBin, s0);

// export const cross = s0 => s1 => split(s0).map(splat(s1)).reduce(splatBin, s0);

// .reduce(splatBin, s0);

// export const splatBin = (str ,chr) => splat(str)(chr);
// export const allSplat = str => (...chrs) => chrs.reduce(splatBin, str);
  
