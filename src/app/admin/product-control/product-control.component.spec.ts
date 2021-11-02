import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductControlComponent } from './product-control.component';

describe('ProductControlComponent', () => {
  let component: ProductControlComponent;
  let fixture: ComponentFixture<ProductControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
