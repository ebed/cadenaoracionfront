import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Peticion} from "../models/peticion";
import {Observable} from "rxjs/Observable";
import {PETICIONES} from "../mocking/peticionesmock";
import {ApiService} from "./api.service";

@Injectable()
export class PeticionesService {


  constructor(private apiService: ApiService) { }


  public getPeticiones(tipo) {
  //  const token = localStorage.getItem('auth-token');
   // const authtoken = 'token ' + token;
 //   const httpHeaders = new HttpHeaders()
  //    .set('Content-Type', 'application/json')
  //    .set('Authorization', authtoken);

    // const endpoint = this.API_URL  ;
    //return this.http.get(endpoint, {headers: httpHeaders});

    return this.apiService.get('peticiones?usuario_id='+localStorage.getItem('usuarioid')+'&tipo='+tipo);
  }

  public creaPeticion(titulo, descripcion, usuario, tipo_id){
    const peticion = new Peticion();
    peticion.titulo = titulo;
    peticion.descripcion = descripcion;
    peticion.usuario_id = usuario;
    peticion.tipo_id = tipo_id;
    peticion.estado_id = 1;

    return this.apiService.post('peticiones', peticion)
  }


  public cancelaPeticion(id) {
    console.log("Cancela");

    const peticion = new Peticion();
    peticion.id = id;
    return this.apiService.post('peticiones/cancela',peticion);
  }

  public finalizaPeticion(id){
    console.log("Finaliza");
    const peticion = new Peticion();
    peticion.id = id;
    return this.apiService.post('peticiones/finaliza',peticion);
  }

  public anulaIntercesion(id){
    const peticion = new Peticion();
    peticion.id = id;
    peticion.usuario_id = parseInt(localStorage.getItem("usuarioid"),10);
    return this.apiService.post('peticiones/cancelaintercesion',peticion);
  }
}
