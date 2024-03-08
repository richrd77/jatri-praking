import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiCheckinComponent } from './admi-checkin.component';

describe('AdmiCheckinComponent', () => {
  let component: AdmiCheckinComponent;
  let fixture: ComponentFixture<AdmiCheckinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmiCheckinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmiCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
