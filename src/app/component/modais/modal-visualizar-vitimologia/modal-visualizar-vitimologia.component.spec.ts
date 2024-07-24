import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVisualizarVitimologiaComponent } from './modal-visualizar-vitimologia.component';

describe('ModalVisualizarVitimologiaComponent', () => {
  let component: ModalVisualizarVitimologiaComponent;
  let fixture: ComponentFixture<ModalVisualizarVitimologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalVisualizarVitimologiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalVisualizarVitimologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
