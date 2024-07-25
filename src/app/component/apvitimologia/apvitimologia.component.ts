import { Component, ViewChild } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms'; // Importação necessária para ngModel
import { Vitimologias } from '../../interfaces/vitimologias';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalVisualizarVitimologiaComponent } from '../modais/modal-visualizar-vitimologia/modal-visualizar-vitimologia.component';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ModalAprovarVitimologiaComponent } from '../modais/modal-aprovar-vitimologia/modal-aprovar-vitimologia.component';

@Component({
  selector: 'app-apvitimologia',
  standalone: true,
  imports: [TableModule, TagModule, RatingModule, ButtonModule, CommonModule, FormsModule, MatDialogModule, IconFieldModule, InputIconModule],
  templateUrl: './apvitimologia.component.html',
  styleUrl: './apvitimologia.component.scss'
})
export class ApvitimologiaComponent {

  products!: Vitimologias[];
  constructor(private productService: ProductsService, public dialog: MatDialog) {
  }
  cols: any[] = [];

  ngOnInit() {
    this.productService.getProducts().then((data) => {
      this.products = data;
    });
    this.cols = [
      { field: 'motorista', header: 'Motorista' },
      { field: 'cpf', header: 'CPF' },
      { field: 'image', header: 'Image' },
      { field: 'userSolicitante', header: 'User Solicitante' },
      { field: 'status', header: 'Status' },
      { field: 'acao', header: 'Ações' }
    ];

  }

  getSeverity(status: string): 'success' | 'warning' | 'danger' | undefined {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return undefined; // Retorna undefined se o status não for reconhecido
    }
  }

  openDialog(vitimologia: Vitimologias) {
    const dialogRef = this.dialog.open(ModalAprovarVitimologiaComponent, { data: { vitimologia: vitimologia } });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result.colaboradorCompleto}`);
    });
  }

  @ViewChild('dt2') dt2: Table | null = null;

  filterGlobal(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target) {
      if (this.dt2) {
        this.dt2.filterGlobal(target.value, 'contains');
      }
    }
  }


}

