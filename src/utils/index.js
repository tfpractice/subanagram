export * from './compare';
export * from './has';
export * from './join';
export * from './replace';
export * from './size';
export * from './split';
export * from './cat';

export const equiv = a => b => b === a;
export const isNot = a => b => b !== a;

// // 
// // export const hasSize = len => str => str.length === len;
// // export const exceeds = min => str => str.length > min;
// // 
// // export const lower = str => str.toLowerCase();
// // export const hasComma = str => new Set(str.split('')).has(',');
// // 
// // export const join = arr => arr.join('');
// // export const cJoin = arr => arr.join();
// 
// // export const splAlph = str => lower(str).split(/[^0-9a-z?]+/);
// // export const splEach = str => lower(str).split('');
// // export const split = str => hasComma(str) ? splAlph(str) : splEach(str);
// 
// // export const exclude = x => str => join(split(str).filter(isNot(x)));
// 
// export const sort = str => split(str).sort();
// 
// export const chars = str => [ ...new Set(split(join(split(str)))), ];
// export const splSet = str => [ ...new Set(split(str)), ];
// export const strSet = str => cJoin(splSet(str));
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
// // export const limit = x => chr => str => exclude(chr)(str).concat(repeat(x)(chr));
// // export const has = chr => str => new Set(split(str)).has(chr);
// 
// // export const idx = chr => str => str.indexOf(chr);
// 
// // export const drop = c => str => str.replace(c, '');
// export const splDrop = c => str => split(drop(c)(str)).join();
// 
// export const flatBin = (a = [],b = []) => [ ...a,...b, ];
// export const freq = str => c => split(str).filter(equiv(c)).length;
// export const genFreq = str => c => repeat(freq(str)(c))(c);
// 
// export const fMap = str => chars(str).map(genFreq(str)).reduce(flatBin,[]);
// export const allFreq = str => fMap(str).join();
