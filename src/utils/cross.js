import { splat, splatBin, splatSet, splatSetBin, } from './splat';
import { charSet,split, uniq, } from './split';
import { appendSet,appendUnionBin, } from './append';
import { jnSort,join, } from './join';
import { union,unionJoin,unionJoinBin, } from './compare';

export const cross = s0 => s1 => join(split(s1).map(splat(s0)));
export const crossBin = (s0, s1) => cross(s0)(s1);

export const crossSet = s0 => s1 => jnSort(join(split(s1).map(splatSet(s0))));
export const crossSetBin = (s0, s1) => crossSet(s0)(s1);
export const crossUnionBin = (s0, s1) => union(s0)(s1).reduce(crossSetBin,s0);
export const autoCross = str => crossSet(str)(str);

export const permute = s0 => s1 =>
 appendSet([ s0, s1, ]
   .map(autoCross)
   .reduce(crossSetBin, s0))(union(s1)(s0));
