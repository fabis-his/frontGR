import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAprovarVitimologiaComponent } from './modal-aprovar-vitimologia.component';

describe('ModalAprovarVitimologiaComponent', () => {
  let component: ModalAprovarVitimologiaComponent;
  let fixture: ComponentFixture<ModalAprovarVitimologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalAprovarVitimologiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalAprovarVitimologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
