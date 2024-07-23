import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApvitimologiaComponent } from './apvitimologia.component';

describe('ApvitimologiaComponent', () => {
  let component: ApvitimologiaComponent;
  let fixture: ComponentFixture<ApvitimologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApvitimologiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApvitimologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
