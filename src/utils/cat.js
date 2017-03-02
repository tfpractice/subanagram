  import { alpha, alphStr, chars,exceeds,jnAlpha,jnSet,join,split,strSet, uniq, } from './index';
  import { freqStr, } from './frequency';
  
  export const repeat = times => str => str.repeat(times);
  export const repCat = str => join(strSet(join([ str, repeat(2)(str), ])));
  export const reps = x => s => exceeds(x - 1)(split(s)) ? s
  : reps(x)(repCat(s));
  
  export const cat = c0 => c1 => c0.concat(c1);
  export const catBin = (c0, c1) => cat(c0)(c1);
  
  export const add = x => y => join([ split(x),y, ]);
  export const addBin = (x, y) => add(x)(y);
  
  export const addSet = x => y => jnSet(add(x)(y));
  export const addSetBin = (x, y) => addSet(x)(y);

  export const append = x => y => join([ x, y, ]);
  export const appendBin = x => y => append(x)(y);

  export const splat = str => c => split(str).map(cat(c)).reduce(addSetBin, str);
  export const splatBin = (str ,chr) => splat(str)(chr);
  export const allSplat = str => (...chrs) => chrs.reduce(splatBin, str);
  
  export const cross = s0 => s1 => split(s0).map(splat(s1)).reduce(addSetBin, s0);
  export const crossBin = (s0, s1) => cross(s0)(s1);
  export const crossMany = s0 => (...strs) => strs.reduce(crossBin, s0);
  
  export const crossCat = s0 => (s1) => {
    const cRes = split((s1)).reduce(crossBin,s0);
    const myCross = cross(s0)(s1);

    console.log('s0',s0);
    console.log('s1',s1);
    console.log('myCross',split(myCross));

    // console.log(split(myCross).reduce(splatBin, s0));

    // console.log('cross',cross(s0)(s1));

    console.log('result', cRes);

    // console.log('crossMany',crossMany(s0)(...split(s1)));

    // console.log('cross&SPLa',splat(s0)(cross(s0)(s1)));

    // return cRes;

    // console.log();
    // return splat(s0)(cross(s0)(s1));

    // console.log('corss and catmany',cross(s0)(s1).concat((crossMany(s0)(s1))));
    return (cross(s0)(s1).concat(uniq(crossMany(s0)(s1))));
  };
  
  export const crossCatBin = (s0 ,s1) => {
    console.log('crossCatBin',crossCat(s0)(s1));
    return crossCat(s0)(s1);
  };
  export const crossCatAll = s0 => (...strs) => strs.reduce(crossCatBin, s0);
