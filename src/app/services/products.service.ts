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
          motorista: 'Gustavo Bueno Ferreira',
          cpf: '000.000.000-00',
          image: 'blue-band.jpg',
          userSolicitante: 'Nome user solicitante',
          status: 'Esperando aprovação BRK',
        },
        {
          id: '1002',
          motorista: 'José',
          cpf: '000.000.000-00',
          image: 'blue-band.jpg',
          userSolicitante: 'Nome user solicitante',
          status: 'Em andamento',
        },
        {
          id: '1002',
          motorista: 'Nome Completo',
          cpf: '000.000.000-00',
          image: 'blue-band.jpg',
          userSolicitante: 'Nome user solicitante',
          status: 'Em andamento',
      },
    ];
  }

  getProducts() {
    return Promise.resolve(this.getProductsData());
  }

  constructor() { }

}
