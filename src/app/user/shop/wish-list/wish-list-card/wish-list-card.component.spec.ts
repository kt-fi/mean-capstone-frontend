import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListCardComponent } from './wish-list-card.component';

describe('WishListCardComponent', () => {
  let component: WishListCardComponent;
  let fixture: ComponentFixture<WishListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishListCardComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
