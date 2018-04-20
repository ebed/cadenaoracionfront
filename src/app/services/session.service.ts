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

    this.apiService.post('auth/login',usuario).subscribe( data => {
      console.log(data);
      this.logged = true;
      this.token = data['access_token'];
      console.log(this.token);
      localStorage.setItem('auth-token', this.token);
      localStorage.setItem('usuarioid', data['usuario']['id']);
    })

  }


  public logout() {
    this.logged = false;
    localStorage.setItem('auth-token', '');
  }

  public isLogged() {
    return this.logged;
  }



}
