import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class VistaService {

  constructor() { }

 // private nombrevista="Peticiones";

 // private vista = 'grilla';

 // public getVista():string{
  //  return this.vista;
 // }


  private vista = new Subject<string>();
  private nombreVista = new Subject<string>();

  vista$ = this.vista.asObservable();
  nombreVista$ = this.nombreVista.asObservable();

  setVista(vista: string) {
    this.vista.next(vista);
    let nombre = this.obtieneNombre(vista);
    console.log(nombre);
    this.setNombreVista(nombre);

  }

  getVista() {
    return this.vista$;
  }


  setNombreVista(nombrevista: string) {
    this.nombreVista.next(nombrevista);

  }

  getNombreVista(){
    return this.nombreVista$;
  }

  private obtieneNombre(vista) {
    if (vista==='perfil') {
      return 'Mi Perfil';
    }
    if (vista==='leerpeticion') {
      return 'Detalle Petición';
    }
    if (vista==='mensajes') {
      return 'Bandeja Mensajes';
    }
    if (vista==='formularioPeticion') {
      return 'Crear Peticion';
    }
    if (vista==='mispeticiones') {
      return 'Mis Peticioness'
    }
    if (vista==='listaPeticiones') {
      return 'Mis Peticiones';
    }
    if (vista==='grilla') {
      return 'Peticiones';
    }
    if (vista==='listaIntercesiones') {
      return 'Mis compromisos';
    } ;

    if (vista==='enviarmensaje') {
      return 'Envio de  Mensajes';
    } ;
    if (vista==='leermensaje') {
      return 'Detalle Mensajes';
    } ;
  }
}
