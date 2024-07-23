import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitimologiaComponent } from './vitimologia.component';

describe('VitimologiaComponent', () => {
  let component: VitimologiaComponent;
  let fixture: ComponentFixture<VitimologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VitimologiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VitimologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
