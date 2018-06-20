import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Peticion} from "../models/peticion";
import {Observable} from "rxjs/Observable";

@Injectable()
export class SharePeticionsService {

  constructor() { }


  private peticion1: Peticion;
  getPeticion() {
    return this.peticion1;
  }
  setPeticion(peticion: Peticion) {
    console.log("Almacenando peticion");
    this.peticion1 = peticion;
  }

}
