import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { WishListService } from './wish-list.service';

describe('WishListService', () => {
  let service: WishListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, RouterTestingModule]
    });
    service = TestBed.inject(WishListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
