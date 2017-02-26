import { autoPrefix, exceeds, split, } from './prefix';

export const hasSize = len => str => str.length === len;
export const permute = str => autoPrefix(str);
export const permsByLength = len => str => autoPrefix(str).filter(hasSize(len));

// export const combine = str => autoPrefix(str).filter(exceeds(3));
export const sort = str => split(str).sort().join('');

export const combine = str => [ ...new Set(permute(str).map(sort)), ];
