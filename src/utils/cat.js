  import { alpha, exceeds, join,split,strSet, } from './index';
  export const cat = c0 => c1 => c0.concat(c1);
  export const catBin = (c0, c1) => cat(c0)(c1);

  export const splat = str => chr => split(str).map(cat(chr)).join();
  export const splatBin = (str ,chr) => splat(str)(chr);

  export const repeat = times => str => str.repeat(times);
  export const repCat = str => join(strSet(join([ str, repeat(2)(str), ])));
  export const reps = x => s => exceeds(x - 1)(split(s)) ? s
  : reps(x)(repCat(s));
