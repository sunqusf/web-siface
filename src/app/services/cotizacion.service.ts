import { Injectable } from '@angular/core';

@Injectable()
export class CotizacionService {

  constructor() { }

  buscar(id) {
    return {"id": 1, "codigo": "0001-000173", "vendedor": "Juan Perez", "cliente":{"ruc":"200101010190","razonsocial":"Cascader","direccion":"Calle P L4w Mz. ASD2"},"cart":[{"producto":{"id":1,"codigo":"9290010","nombre":"Caso 4 punta(s) c/ suspension nylon c/rachet H-207","imagen":"http://img.directindustry.es/images_di/photo-g/60721-4994397.jpg","marca":"YAM","stock":20,"precio":21.3,"unidad":"Und."},"cantidad":1},{"producto":{"id":1,"codigo":"9290010","nombre":"Caso 4 punta(s) c/ suspension nylon c/rachet H-207","imagen":"http://img.directindustry.es/images_di/photo-g/60721-4994397.jpg","marca":"YAM","stock":20,"precio":21.3,"unidad":"Und."},"cantidad":"2"},{"producto":{"id":1,"codigo":"9290010","nombre":"Caso 4 punta(s) c/ suspension nylon c/rachet H-207","imagen":"http://img.directindustry.es/images_di/photo-g/60721-4994397.jpg","marca":"YAM","stock":20,"precio":21.3,"unidad":"Und."},"cantidad":1}]};
  }

}
