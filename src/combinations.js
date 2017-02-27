import { autoPrefix, } from './prefix';
import { exceeds, hasSize, sort, } from './utils';

export const permute = str => autoPrefix(str);
export const permLen = len => str => permute(str).filter(hasSize(len));
export const permMin = (min = 2) => str => permute(str).filter(exceeds(min));

export const combine = str => [ ...new Set(permute(str).map(sort)), ];
export const combineLen = len => str => [ ...new Set(permLen(len)(str).map(sort)), ];
export const combineMin = min => str => [ ...new Set(permMin(min)(str).map(sort)), ];
