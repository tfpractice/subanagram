import { split, } from './split';
import { join, } from './join';

export const isEq = a => b => b === a;
export const xEq = a => b => b !== a;
const has = str => chr => new Set(str).has(chr);
const xHas = str => chr => !has(str)(chr);
const idx = chr => str => str.indexOf(chr);
const comma = str => has(str)(',');

export const diff = s0 => s1 => split(s0).filter(xHas(s1));
export const diffBin = (s0 , s1) => diff(s0)(s1);

export const diffJoin = s0 => s1 => join(diff(s0)(s1));
export const diffJoinBin = (s0 , s1) => diffJoin(s0)(s1);

export const inter = s0 => s1 => split(s0).filter(has(s1));
export const interBin = (s0 , s1) => inter(s0)(s1);

export const interJoin = s0 => s1 => join(inter(s0)(s1));
export const interJoinBin = (s0 , s1) => interJoin(s0)(s1);

export const union = s0 => s1 => split(s0).concat(diff(s1)(s0));
export const unionBin = (s0 , s1) => union(s0)(s1);

export const unionJoin = s0 => s1 => join(union(s0)(s1));
export const unionJoinBin = (s0 , s1) => unionJoin(s0)(s1);
