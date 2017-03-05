  import { chars,charSet,cSet,exceeds,jnSet,join, split, strSet,uniq, } from './index';
  import { diff,has,inter, union, } from './compare';
  import { alpha, alphStr, } from './split';
  import { cJoin,flatJoin, } from './join';
  export const repeat = times => str => str.repeat(times);
  export const repCat = str => join(strSet(join([ str, repeat(2)(str), ])));
  export const reps = x => s => exceeds(x - 1)(split(s)) ? s
  : reps(x)(repCat(s));
   
  export const cat = c1 => c0 => flatJoin([ c0,c1, ]);
  export const catBin = (c0, c1) => {
    console.log('catBin',c0, c1,cat(c1)(c0));
    return cat(c1)(c0);
  };
  
  export const catSet = c1 => c0 => flatJoin(cSet(cat(c1)(c0)));
  export const catSetBin = (c0, c1) => catSet(c1)(c0);
  
  export const catDiff = c0 => (c1) => {
    console.log('diff(c1)(c0)',`${c0}______${c1}\n`,diff(c1)(c0));
    return diff(c1)(c0).reduce(catSetBin,c0); 
  };
  export const catDiffBin = (c0, c1) => catDiff(c1)(c0);
    
  export const catUnion = c0 => (c1) => {
    console.log(' union(c1)(c0)', `${c0}______${c1}\n`,union(c1)(c0));
    return union(c1)(c0).reduce(catSetBin,c0);
  };
  export const catUnionBin = (c0, c1) => catUnion(c1)(c0);
    
  export const add = y => x => join([ ...split(x),...split(y), ]);
  export const addBin = (x, y) => add(y)(x);
  
  export const addSet = y => x => jnSet(add(y)(x));
  export const addSetBin = (x, y) => addSet(y)(x);

  export const append = y => x => join([ x, y, ]);
  export const appendBin = (x,y) => append(y)(x);
  export const appendSet = y => x => join([ ...new Set([ x, y, ]), ]);

  // export const appendSet = y => x => join(uniq( append(y)(x)))

  export const appendSetBin = (y, x) => join(uniq(append(y)(x)));

  const dedupeC = c => str => (str.replace(RegExp(`${c}+`,'g'),c));
  const dedupeBin = (str,c) => {
    // console.log('DEDUPING',str,c);
    const f = 0;

    // console.log('DEDUPING',dedupeC(c)(str));

    // console.log((cross(str)(str)));
    return dedupeC(c)(str); 
  };
  const dedupe = str => charSet(str).reduce(dedupeBin, str);
  const dedupeAll = str => split(str).map(dedupe).reduce(addSetBin, str);
  
  export const autoSplat = str => add(str)(str);

  export const splat = str => c => split(str).map(cat(c)).reduce(addSetBin, autoSplat(cat(c)(str)));
  export const splatBin = (str ,chr) => splat(str)(chr);
  export const allSplat = str => (...chrs) => chrs.reduce(splatBin, str);
  
  // export const cross2 = s0 => s1 => split(s1).reduce(splatBin, add(s0)(s1));

  // export const cross2 = s0 => s1 => split(s0).map(splat(s1)).reduce(splatBin, s0);

  export const cross2 = s0 => s1 => split(s1).reduce(splatBin, s0);
  export const cross = s0 => s1 => split(s0).map(splat(s1)).reduce(addSetBin, s0);
  export const crossBin = (s0, s1) => cross(s0)(s1);
  export const crossMany = s0 => (...strs) => strs.reduce(crossBin, s0);

  export const autoCross = str => charSet(str).reduce(dedupeBin,cross(str)(str));
  export const crossCat = s0 => (s1) => {
    const cRes = split((s0)).reduce(crossBin,splat(s0)(s1));
    const mSplat = splat(s0)(s1);
    const myCross = cross(s0)(s1);
    const a0 = autoCross(s0);
    const a1 = autoCross(s1);

    console.log('cross1',cross(s0)(s1));
    console.log('cross2',cross2(s0)(s1));

    // console.log('dedupe',dedupeAll(cRes));

    // const cRes = (splat(s0)(myCross));

    // console.log('addCoss',addSet(s0)(cross(s0)(s1)));

    // console.log('a0', a0);
    // console.log('a1', a1);
    console.log('s0',s0);
    console.log('s1',s1);

    // console.log('myCross',(myCross));
    // console.log(mSplat);

    // console.log(split(myCross).reduce(splatBin, s0));

    // console.log('cross',cross(s0)(s1));

    console.log('result', cRes);

    // console.log('crossMany',crossMany(s0)(...split(s1)));

    // console.log('cross&SPLa',splat(s0)(cross(s0)(s1)));
    // return dedupe(addSet(s0)(myCross));
    return dedupeAll(cRes);

    // console.log();
    // return splat(s0)(cross(s0)(s1));

    // console.log('corss and catmany',cross(s0)(s1).concat((crossMany(s0)(s1))));
    // return (cross(s0)(s1).concat(uniq(crossMany(s0)(s1))));
  };
  
  export const crossCatBin = (s0 ,s1) => {
    const ccb = 0;

    // console.log('crossCatBin',crossCat(s0)(s1));

    return crossCat(s0)(s1);
  };
  export const crossCatAll = s0 => (...strs) => strs.reduce(crossCatBin, s0);
