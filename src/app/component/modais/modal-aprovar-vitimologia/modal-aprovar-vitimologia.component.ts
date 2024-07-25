import { Component, Inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-modal-aprovar-vitimologia',
  standalone: true,
  imports: [
    ButtonModule,
    StepperModule,
    CardModule,
    CommonModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    CalendarModule
  ],
  templateUrl: './modal-aprovar-vitimologia.component.html',
  styleUrl: './modal-aprovar-vitimologia.component.scss'
})
export class ModalAprovarVitimologiaComponent {

  genders: any[] = [
    { label: 'Masculino', value: 'M' },
    { label: 'Feminino', value: 'F' }
  ];

  gendersFuncao: any[] = [
    { label: 'Motorista', value: 'motorista' },
  ];

  gendersPerfil: any[] = [
    { label: 'Frota', value: 'frota' },
    { label: 'Agregado', value: 'agragado' },
    { label: 'Autônomo', value: 'autonomo' },
  ];

  gendersResponsavelFaturamento: any[] = [
    { label: 'TDM Transportes', value: 'tdm' },
  ];

  gendersUF: any[] = [
    { label: 'GO', value: 'GO' },
  ];

  gendersCidade: any[] = [
    { label: 'Goiânia', value: 'goiania' },
  ];

}