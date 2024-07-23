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
  imports: [ButtonModule, StepperModule,CardModule,CommonModule,InputTextModule,FormsModule,DropdownModule],
  templateUrl: './vitimologia.component.html',
  styleUrl: './vitimologia.component.scss'
})
export class VitimologiaComponent {
  value: string ='';


}

