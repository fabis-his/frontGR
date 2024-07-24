import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms'; // Importação necessária para ngModel
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [TableModule, TagModule, RatingModule, ButtonModule, CommonModule, FormsModule],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.scss',

})
export class ListagemComponent {
  products!: Product[];
  constructor(private productService: ProductsService) {}
  cols: any[] = [];

  ngOnInit() {
      this.productService.getProducts().then((data) => {
          this.products = data;
      });
      this.cols = [
        { field: 'name', header: 'Name' },
        { field: 'image', header: 'Image' },
        { field: 'price', header: 'Price' },
        { field: 'category', header: 'Category' },
        { field: 'rating', header: 'rating' },
        { field: 'inventoryStatus', header: 'Status' }
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
}
