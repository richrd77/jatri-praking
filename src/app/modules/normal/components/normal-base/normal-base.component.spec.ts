import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalBaseComponent } from './normal-base.component';

describe('NormalBaseComponent', () => {
  let component: NormalBaseComponent;
  let fixture: ComponentFixture<NormalBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NormalBaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NormalBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
