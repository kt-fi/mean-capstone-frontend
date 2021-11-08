import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product("46342jjjhj", "Product 1", "This is a product", 232, 3467, "URL", true)).toBeTruthy();
  });
});
