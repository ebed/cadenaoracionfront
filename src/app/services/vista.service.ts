import { Injectable } from '@angular/core';

@Injectable()
export class VistaService {

  constructor() { }

  private vista='grilla';


  public getVista():string{
    return this.vista;
  }

  public setVista(vista){
    this.vista = vista;
  }
}
