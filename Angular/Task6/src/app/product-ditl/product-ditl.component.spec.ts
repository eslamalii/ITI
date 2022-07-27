import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDitlComponent } from './product-ditl.component';

describe('ProductDitlComponent', () => {
  let component: ProductDitlComponent;
  let fixture: ComponentFixture<ProductDitlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDitlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDitlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
