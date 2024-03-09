import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCheckComponent } from './admin-check.component';

describe('AdminCheckComponent', () => {
  let component: AdminCheckComponent;
  let fixture: ComponentFixture<AdminCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
