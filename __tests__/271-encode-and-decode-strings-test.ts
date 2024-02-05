import {encode, decode} from '../medium/271-encode-and-decode-strings';

describe('271-encode-and-decode-strings test', () => {
  it('input: ["we","say",":","yes"]', () => {
    expect(encode(["we","say",":","yes"])).toEqual('2#we3#say1#:3#yes');
    expect(decode(encode(["we","say",":","yes"]))).toEqual(["we","say",":","yes"]);
  })
})