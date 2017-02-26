import 'jasmine-expect';
import { find,findByLen, } from 'src/find';

describe('find', () => {
  it('returns a promise that resolves to an array of anagrams', () => {
    find('braed').then(all => expect(all).toBeArray());
  });
});
describe('findByLen', () => {
  it('finds len letter anagrams from a set of charactes', () => {
    // findByLen(3)('braed').then(all => expect(all).toBeArray());
  });
});
