import { join, split, } from './utils';

// export const exclude = x => str => join(split(str).filter(isNot(x)));

// 
// export const cat = c0 => c1 => c0.concat(c1);
// export const catBin = (c0, c1) => cat(c0)(c1);
// export const splat = str => chr => split(str).map(cat(chr)).join();
// export const splatBin = (str ,chr) => splat(str)(splat(str)(chr));
// 
// export const rep = chr => [ chr, chr, ].join();
//   
// export const repeat = x => s => exceeds(x - 1)(split(s)) ? split(strSet(s)) 
//   : repeat(x)(cat(rep(s))(s));
// 
// export const limit = x => chr => str => exclude(chr)(str).concat(repeat(x)(chr));
// export const has = chr => str => new Set(split(str)).has(chr);
// 
// export const idx = chr => str => str.indexOf(chr);
// 
// export const drop = c => str => str.replace(c, '');
// export const splDrop = c => str => split(drop(c)(str)).join();
// 
// export const flatBin = (a = [],b = []) => [ ...a,...b, ];
// export const freq = str => c => split(str).filter(equiv(c)).length;
// export const genFreq = str => c => repeat(freq(str)(c))(c);
// 
// export const fMap = str => chars(str).map(genFreq(str)).reduce(flatBin,[]);
// export const allFreq = str => fMap(str).join();
