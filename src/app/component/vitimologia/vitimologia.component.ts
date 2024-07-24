import { Component } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-vitimologia',
  standalone: true,
  imports: [
    ButtonModule,
    StepperModule,
    CardModule,
    CommonModule,
    InputTextModule,
    FormsModule,
    DropdownModule
  ],
  templateUrl: './vitimologia.component.html', 
  styleUrls: ['./vitimologia.component.scss']
})
export class VitimologiaComponent {
  fullName: string = '';
  selectedGender: any;
  date: string = '';
  cpf: string = '';
  rg: string = '';
  dataEmissaoRg: string = '';
  orgaoExp: string = '';
  controleCliente: string = ''; // Novo campo para Controle do Cliente
  genders: any[] = [
    { label: 'Masculino', value: 'M' },
    { label: 'Feminino', value: 'F' }
  ];

  onDateInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }
    if (value.length > 5) {
      value = value.slice(0, 5) + '/' + value.slice(5, 9);
    }
    input.value = value;
    this.date = value;
  }

  onCpfInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    if (value.length > 11) {
      value = value.slice(0, 11); // Limita a 11 dígitos
    }
    input.value = value;
    this.cpf = value;
  }

  onRgInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    input.value = value;
    this.rg = value;
  }

  onDataEmissaoRgInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }
    if (value.length > 5) {
      value = value.slice(0, 5) + '/' + value.slice(5, 9);
    }
    input.value = value;
    this.dataEmissaoRg = value;
  }
}



