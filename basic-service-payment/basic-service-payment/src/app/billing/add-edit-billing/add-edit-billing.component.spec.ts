import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBillingComponent } from './add-edit-billing.component';

describe('AddEditBillingComponent', () => {
  let component: AddEditBillingComponent;
  let fixture: ComponentFixture<AddEditBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditBillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
