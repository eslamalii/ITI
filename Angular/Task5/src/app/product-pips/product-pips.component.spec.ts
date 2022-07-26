import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPipsComponent } from './product-pips.component';

describe('ProductPipsComponent', () => {
  let component: ProductPipsComponent;
  let fixture: ComponentFixture<ProductPipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
