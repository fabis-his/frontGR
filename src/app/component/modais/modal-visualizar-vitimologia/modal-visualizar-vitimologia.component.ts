import { Component, Inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { StepsModule } from 'primeng/steps';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Vitimologias } from '../../../interfaces/vitimologias';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
    selector: 'app-modal-visualizar-vitimologia',
    standalone: true,
    imports: [StepsModule, MatStepperModule],
    templateUrl: './modal-visualizar-vitimologia.component.html',
    styleUrl: './modal-visualizar-vitimologia.component.scss'
})
export class ModalVisualizarVitimologiaComponent implements OnInit {
    items: MenuItem[] = [];
    selectedStep: number = 0;
    statusMessage: string = '';


    constructor(
        public dialogRef: MatDialogRef<ModalVisualizarVitimologiaComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { vitimologia: Vitimologias }
    ) {}

    ngOnInit(): void {
        console.log('Status recebido:', this.data.vitimologia.status); // Verifique o status recebido
        this.selectedStep = this.getCurrentStep();
        console.log('Passo selecionado:', this.selectedStep); // Verifique o passo selecionado
        this.items = [
            { label: 'Iniciou', command: () => this.selectStep(0) },
            { label: 'Esperando aprovação GR', command: () => this.selectStep(1) },
            { label: 'Esperando aprovação BRK', command: () => this.selectStep(2) },
            { label: 'Finalizado', command: () => this.selectStep(3) }
        ];
        this.statusMessage = this.getStatusMessage(); // Defina a mensagem de status
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    selectStep(step: number): void {
        this.selectedStep = step;
    }

 
    getCurrentStep(): number {
        // Ajuste a lógica para determinar o passo atual com base no status
        switch (this.data.vitimologia.status) {
            case 'Finalizado':
                return 3;
            case 'Esperando aprovação BRK':
                return 2;
            case 'Esperando aprovação GR':
                return 1;
            case 'Iniciou':
            default:
                return 0;
        }
    }

    getStatusMessage(): string {
        // Verifica o status e retorna a mensagem apropriada
        if (this.data.vitimologia.status === 'Aprovado' || this.data.vitimologia.status === 'Reprovado') {
            return this.data.vitimologia.status;
        }
        return 'Em andamento';
    }
}
