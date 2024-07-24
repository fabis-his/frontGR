import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ProductsService {
  getProductsData() {
    return [

        {
            id: '1002',
            code: 'zz21cz3c1',
            name: 'Blue Band',
            description: 'Product Description',
            image: 'blue-band.jpg',
            price: 79,
            category: 'Fitness',
            quantity: 2,
            inventoryStatus: 'LOWSTOCK',
            rating: 3
        },
        {
            id: '1003',
            code: '244wgerg2',
            name: 'Blue T-Shirt',
            description: 'Product Description',
            image: 'blue-t-shirt.jpg',
            price: 29,
            category: 'Clothing',
            quantity: 25,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
          id: '1002',
          code: 'zz21cz3c1',
          name: 'Blue Band',
          description: 'Product Description',
          image: 'blue-band.jpg',
          price: 79,
          category: 'Fitness',
          quantity: 2,
          inventoryStatus: 'LOWSTOCK',
          rating: 3
      },
    ];
  }

  getProducts() {
    return Promise.resolve(this.getProductsData());
  }

  constructor() { }

}
