import removeDuplicates from '../medium/80-remove-duplicates-from-sorted-array-2';

describe('80-remove-duplicates-from-sorted-array-2 test', () => {
  it('input: [1,1,1,2,2,3]', () => {
    const input = [1,1,1,2,2,3];
    expect(removeDuplicates(input)).toEqual(5);
    expect(input).toEqual([1,1,2,2,3,3]);
  })
})