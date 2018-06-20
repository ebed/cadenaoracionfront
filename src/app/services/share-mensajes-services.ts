import { Injectable } from '@angular/core';
import {Mensaje} from "../models/mensaje";

@Injectable()
export class ShareMensajesService {

  constructor() { }


  private mensaje: Mensaje;
  getMensaje() {
    return this.mensaje;
  }
  setMensaje(mensaje: Mensaje) {
    console.log("Almacenando mensaje");
    this.mensaje = mensaje;
  }

}
