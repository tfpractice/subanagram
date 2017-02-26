import { autoPrefix, } from './prefix';
import { hasSize, sort, } from './utils';

export const permute = str => autoPrefix(str);
export const permLen = len => str => permute(str).filter(hasSize(len));

export const combine = str => [ ...new Set(permute(str).map(sort)), ];
export const combineLen = len => str => [ ...new Set(permLen(len)(str).map(sort)), ];
