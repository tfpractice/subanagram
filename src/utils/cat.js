  import { alpha, chars, exceeds,join,split,strSet, } from './index';
  import { freqStr, } from './frequency';
  export const repeat = times => str => str.repeat(times);
  export const repCat = str => join(strSet(join([ str, repeat(2)(str), ])));
  export const reps = x => s => exceeds(x - 1)(split(s)) ? s
  : reps(x)(repCat(s));
  
  export const cat = c0 => c1 => c0.concat(c1);
  export const catBin = (c0, c1) => cat(c0)(c1);
  const joinC = c0 => c1 => [ c0,c1, ].join();

  export const splat = str => chr => split(str).map(cat(chr)).join();
  export const splatBin = (str ,chr) => splat(str)(chr);
  export const allSplat = str => (...chars) => chars.reduce(splatBin, str);
  
  export const cross = s0 => s1 => split(s0).map(splat(s1)).join();
  export const crossBin = (s0, s1) => cross(s0)(s1);
  export const crossMany = s0 => (...strs) => strs.reduce(crossBin, s0);
  
  export const crossCat = s0 => (s1) => {
    console.log('s0',s0);
    console.log('s1',s1);

    // console.log(freqStr(s1));

    // console.log(cross(s0)(freqStr(s1)));

    // console.log(splat(s0)(cross(s0)(s1)));

    // console.log(chars(cat(s0)(s1))(cross(s0)(s1));

    // console.log('crossMany',crossMany(s0)(...split(cross(s0)(s1))));

    // console.log((split(cross(s0)(s1)).reduce(crossBin, s0)));
    // return chars(cross(s0)(s1)).concat(...split(cross(s0)(s1))).join();
    console.log((cross(s0)(s1).concat(split(crossMany(s0)(s1)))));
    return strSet(joinC(chars(cross(s0)(s1)))(cross(s0)(s1).concat(crossMany(s0)(s1))));

    // console.log(cross(s0)(freqStr(s1)));
    // console.log(cross(split(s1).reduce(crossBin, s0)));

    // console.log('crossMany',crossMany(s0)((cross(s0)(s1))));

    // console.log(chars(cross(s0)(s1)).map(splatBin, (cross(s0)(s1))));
    return [ ...split(s0), ...split(s1), ...split(cross(s0)(s1)), ].join();
  };
  
  export const crossCatBin = (s0 ,s1) => {
    console.log('crossCatBin',crossCat(s0)(s1));
    return crossCat(s0)(s1).join();
  };
  export const crossCatAll = s0 => (...strs) => strs.reduce(crossCatBin, s0);
