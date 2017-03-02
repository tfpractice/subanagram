import { split, } from 'module';
export const cat = c0 => c1 => c0.concat(c1);
export const catBin = (c0, c1) => cat(c0)(c1);

// export const mapCat = str=>chr=> split(str).map(cat(chr))
export const splat = str => chr => split(str).map(cat(chr));
export const splatBin = (str ,chr) => splat(str)(splat(str)(chr));
