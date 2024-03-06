import containsNearbyDuplicate from '../easy/219-contains-duplicate-2';

describe('219-contains-duplicate-2 test', () => {
  it('input: [1,2,3,1], 3', () => {
    expect(containsNearbyDuplicate([1,2,3,1], 3)).toEqual(true);
  })

  it('input: [1,0,1,1], 1', () => {
    expect(containsNearbyDuplicate([1,0,1,1], 1)).toEqual(true);
  })

  it('input: [1,2,3,1,2,3], 2', () => {
    expect(containsNearbyDuplicate([1,2,3,1,2,3], 2)).toEqual(false);
  })
})