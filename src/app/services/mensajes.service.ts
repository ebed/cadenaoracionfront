import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";

@Injectable()
export class MensajesService {

  constructor(public apiService: ApiService) { }

  getMensajesPeticion(peticion_id: number){
    return this.apiService.get('mensajeria?tipo=listadoMensajesPeticion&peticion_id=' + peticion_id);
  }

  getMensajesMensajepadre(mensaje_id: number) {
    return this.apiService.get('mensajeria?mensaje_id=' + mensaje_id);
  }

}
