import { autoPrefix, split, } from './prefix';

export const hasSize = len => str => str.length === len;
export const permute = str => autoPrefix(str);
export const permLen = len => str => permute(str).filter(hasSize(len));

export const sort = str => split(str).sort().join('');

export const combine = str => [ ...new Set(permute(str).map(sort)), ];
export const combineLen = len => str => [ ...new Set(permLen(len)(str).map(sort)), ];
