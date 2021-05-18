import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllListProductComponent } from './all-list-product.component';

describe('AllListProductComponent', () => {
  let component: AllListProductComponent;
  let fixture: ComponentFixture<AllListProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllListProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllListProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
