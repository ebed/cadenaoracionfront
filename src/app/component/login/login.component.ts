import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../services/session.service";
import {VistaService} from "../../services/vista.service";
import {Usuario} from "../../models/usuario";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public sesionService:SessionService,
              private apiService:ApiService) { }
  vista='login';
  email;
  password;

  usuario:Usuario=new Usuario();

  ngOnInit( ) {
  }

  login() {
    this.sesionService.login(this.email, this.password);
  }

  ingreso() {
    this.apiService.post('auth/register', this.usuario).subscribe(data=>{
      console.log(data);
    })
    this.vista='login';
  }

  registrar() {
    this.vista='registrar';
  }

}
