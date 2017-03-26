import { Injectable } from '@angular/core';

@Injectable()
export class ProductoService {

  constructor() { }

  buscar(query:string){
    return {
      page: 0,
      pageSize: 10,
      total: 100,
      data: [
        {
          id: 1,
          codigo: '9290010',
          nombre: 'Caso 4 punta(s) c/ suspension nylon c/rachet H-207',
          imagen: 'http://img.directindustry.es/images_di/photo-g/60721-4994397.jpg',
          marca: 'YAM',
          stock: 20,
          precio: 21.3,
          unidad: 'Und.'
        },
        {
          id: 2,
          codigo: '9290010',
          nombre: 'Caso 3 punta(s) c/ suspension nylon c/rachet H-207',
          imagen: 'http://img.directindustry.es/images_di/photo-g/60721-4994397.jpg',
          marca: 'ALM',
          stock: 11,
          precio: 38.1,
          unidad: 'Und.'
        },
        {
          id: 3,
          codigo: '9290010',
          nombre: 'Caso 1 punta(s) c/ suspension nylon c/rachet H-207',
          imagen: 'http://img.directindustry.es/images_di/photo-g/60721-4994397.jpg',
          marca: '3M',
          stock: 40,
          precio: 48.5,
          unidad: 'Und.'
        },
        {
          id: 3,
          codigo: '9290010',
          nombre: 'Caso 1 punta(s) c/ suspension nylon c/rachet H-207',
          imagen: 'http://img.directindustry.es/images_di/photo-g/60721-4994397.jpg',
          marca: '3M',
          stock: 0,
          precio: 48.5,
          unidad: 'Und.'
        }
      ]
    }
  }
}
