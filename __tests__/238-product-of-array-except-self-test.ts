import productExceptSelf from '../medium/238-product-of-array-except-self';

describe('347-top-k-frequent-elements test', () => {
  it('input: [1,2,3,4]', () => {
    expect(productExceptSelf([1,2,3,4])).toEqual([24,12,8,6]);
  })

  it('input: [-1,1,0,-3,3]', () => {
    expect(productExceptSelf([-1,1,0,-3,3])).toEqual([-0,0,9,-0,0]);
  })
})