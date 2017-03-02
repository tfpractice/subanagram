import { alpha,alphStr,lower,split, } from './split';
import { join, } from './join';
import { xEq, } from './compare';

export const replace = str => r => chr => lower(str).replace(chr,r);

export const replaceAll = str => r => chr => lower(str).replace(RegExp(chr,'g'),r);
export const drop = chr => str => replace(str)('')(chr);
export const exclude = chr => str => split(str).filter(xEq(chr)).join();
