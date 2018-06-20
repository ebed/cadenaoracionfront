import { Injectable } from '@angular/core';

@Injectable()
export class SnackbarsServiceService {

  constructor() { }

  mensaje:string="";

  getMessage(){
    return this.mensaje;
  }


  setMessage(message){
    this.mensaje=message;
  }
}
