import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Usuario} from "../models/usuario";

@Injectable()
export class SessionService {

  constructor(private apiService: ApiService) { }

  public logged=false;
  private token;



  public login(email, passwd) {
    const usuario = new Usuario();
    usuario.email = email;
    usuario.password = passwd;
    return this.apiService.post('auth/login',usuario);

  }

  public loginSession(token) {
    this.logged = true;
    this.token = token;
  }

  public logout() {
    this.logged = false;
    localStorage.setItem('auth-token', '');
  }

  public isLogged() {
    return  (localStorage.getItem('auth-token')!== '');
  }



}
