import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiCheckoutComponent } from './admi-checkout.component';

describe('AdmiCheckoutComponent', () => {
  let component: AdmiCheckoutComponent;
  let fixture: ComponentFixture<AdmiCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmiCheckoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmiCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
