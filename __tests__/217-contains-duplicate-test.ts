import containsDuplicate from '../easy/217-contains-duplicate';

describe('217-contains-duplicate test', () => {
  it('input: [1,2,3,1]', () => {
    expect(containsDuplicate([1,2,3,1])).toEqual(true);
  })

  it('input: [1,2,3,4]', () => {
    expect(containsDuplicate([1,2,3,4])).toEqual(false);
  })

  it('input: [1,1,1,3,3,4,3,2,4,2]', () => {
    expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toEqual(true);
  })
})