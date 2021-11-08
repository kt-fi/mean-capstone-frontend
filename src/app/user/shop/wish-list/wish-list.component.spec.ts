import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { WishListComponent } from './wish-list.component';

describe('WishListComponent', () => {
  let component: WishListComponent;
  let fixture: ComponentFixture<WishListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishListComponent ],
      imports:[HttpClientModule, RouterModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
