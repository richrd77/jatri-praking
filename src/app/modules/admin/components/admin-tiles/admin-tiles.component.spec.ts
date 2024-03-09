import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTilesComponent } from './admin-tiles.component';

describe('AdminTilesComponent', () => {
  let component: AdminTilesComponent;
  let fixture: ComponentFixture<AdminTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminTilesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
