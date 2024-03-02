import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFacadeComponent } from './detail-facade.component';

describe('DetailFacadeComponent', () => {
  let component: DetailFacadeComponent;
  let fixture: ComponentFixture<DetailFacadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailFacadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailFacadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
