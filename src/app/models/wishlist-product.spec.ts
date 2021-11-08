import { WishlistProduct } from './wishlist-product';

describe('WishlistProduct', () => {
  it('should create an instance', () => {
    expect(new WishlistProduct("w34623", "A Product", "http>//Image", 23)).toBeTruthy();
  });
});
