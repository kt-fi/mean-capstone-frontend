import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User("chris", "cjhillamn3@hotmasil.com", "admin", "password")).toBeTruthy();
  });
});
