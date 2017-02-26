import { autoPrefix, exceeds, split, } from './prefix';
export const hasSize = l => str => str.length === l;
export const permutations = str => autoPrefix(str);
export const permsByLength = min => str => autoPrefix(str).filter(exceeds);

// export const combinations = str => autoPrefix(str).filter(exceeds(3));
export const sort = str => split(str).sort().join('');

export const combinations = str => [ ...new Set(permutations(str).map(sort)), ];
