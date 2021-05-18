import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDeleteProductComponent } from './view-delete-product.component';

describe('ViewDeleteProductComponent', () => {
  let component: ViewDeleteProductComponent;
  let fixture: ComponentFixture<ViewDeleteProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDeleteProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDeleteProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
