import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {TIPOS} from "../mocking/tiposmock";

@Injectable()
export class TiposService {

  constructor(private apiService: ApiService) { }


  public getTipos(){
    //return TIPOS;

    return this.apiService.get('tipos');
  }
}
