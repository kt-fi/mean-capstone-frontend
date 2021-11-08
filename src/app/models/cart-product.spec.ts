import { CartProduct } from './cart-product';

describe('CartProduct', () => {
  it('should create an instance', () => {
    expect(new CartProduct("w34623", "A Product", "http>//Image", 23, 234)).toBeTruthy();
  });
});
