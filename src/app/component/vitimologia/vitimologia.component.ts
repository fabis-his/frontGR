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
  selecionefuncao: any;
  selecioneperfil: any;
  date: string = '';
  cpf: string = '';
  CNPJ: string = '';
  rg: string = '';
  dataEmissaoRg: string = '';
  orgaoExp: string = '';
  controleCliente: string = '';
  motherName: string = ''; // Novo campo para Nome da Mãe
  fatherName: string = ''; // Novo campo para Nome do Pai

  genders: any[] = [
    { label: 'Masculino', value: 'M' },
    { label: 'Feminino', value: 'F' }
  ];

  funcoes: any[] = [
    {label: 'Motorista', value: 'Motorista'},
    {label: 'Ajudante', value: 'Ajudante'},
    {label: 'Outros', value: 'Outros'},
    {label: 'Vigilante', value: 'Vigilante'},
    {label: 'DSP', value: 'DSP'},
    {label: 'HDP Owner', value: 'HDP Owner'},
    {label: 'HDP DA Driver', value: 'HDP DA Driver'},
    {label: 'HDP DA Non Driver', value: 'HDP DA Non Driver'},
    
  ];

  perfil: any[] = [
    {label: 'Frota', value: 'Frota'},
    {label: 'Agregado', value: 'Agregado'},
    {label: 'Autônomo', value: 's'},
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

    onCnpjInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    if (value.length > 14) {
      value = value.slice(0, 14); // Limita a 14 dígitos
    }
    if (value.length > 2) {
      value = value.slice(0, 2) + '.' + value.slice(2);
    }
    if (value.length > 6) {
      value = value.slice(0, 6) + '.' + value.slice(6);
    }
    if (value.length > 10) {
      value = value.slice(0, 10) + '/' + value.slice(10);
    }
    if (value.length > 15) {
      value = value.slice(0, 15) + '-' + value.slice(15);
    }
    input.value = value;
    this.CNPJ = value;
  }
}
