import removeNthFromEnd from '../medium/19-remove-nth-node-from-end-of-list';

describe('19-remove-nth-node-from-end-of-list test', () => {
  class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
    }
  }

  const test = new ListNode(1);
  test.next = new ListNode(2);
  test.next.next = new ListNode(3);
  test.next.next.next = new ListNode(4);
  test.next.next.next.next = new ListNode(5);

  it('input: [1,2,3,4,5], 2', () => {
    removeNthFromEnd(test, 2);
    expect(test.next?.next?.next?.val).toEqual(5);
  })

  it('input: [1,2,3,5], 3', () => {
    removeNthFromEnd(test, 3);
    expect(test.next?.val).toEqual(3);
  })

  it('input: [1,2], 1', () => {
    const test2 = new ListNode(1);
    test2.next = new ListNode(2);
    removeNthFromEnd(test2, 1);
    expect(test2.val).toEqual(1);
  })

  it('input: [1], 1', () => {
    const test3 = new ListNode(1);
    expect(removeNthFromEnd(test3, 1)).toEqual(null);
  })
})