import searchMatrix from '../medium/74-search-a-2D-matrix';

describe('84-largest-rectangle-in-histogram test', () => {
  it('input: [[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3', () => {
    expect(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3))
      .toEqual(true);
  })

  it('input: [[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13', () => {
    expect(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13))
      .toEqual(false);
  })
})