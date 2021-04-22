import { UppercaseWithDotPipe } from './uppercase-with-dot.pipe';

describe('UppercaseWithDotPipe', () => {
  it('create an instance', () => {
    const pipe = new UppercaseWithDotPipe();
    expect(pipe).toBeTruthy();
  });
});
