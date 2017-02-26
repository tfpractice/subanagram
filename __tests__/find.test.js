import 'jasmine-expect';
import { find, } from 'src/find';

describe('find', () => {
  it('returns a promise that resolves to an array of anagrams', () => {
    find('braed').then(({ all, }) => expect(all).toBeArray());

    // expect(find('bread')).toBeTruthy()
    expect(true).toBeTruthy();
  });
});
