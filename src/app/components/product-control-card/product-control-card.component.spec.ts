import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductControlCardComponent } from './product-control-card.component';

describe('ProductControlCardComponent', () => {
  let component: ProductControlCardComponent;
  let fixture: ComponentFixture<ProductControlCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductControlCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductControlCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
