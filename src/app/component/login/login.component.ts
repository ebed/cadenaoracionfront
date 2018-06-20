import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../services/session.service";
import {MatSnackBar} from '@angular/material';
import {Usuario} from "../../models/usuario";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public sesionService:SessionService,
              private apiService:ApiService,
              public snackBar: MatSnackBar) { }
  vista='login';
  email;
  password;
  spinerOn=false;
  password_component;

  usuario:Usuario=new Usuario();

  ngOnInit( ) {
  }

  login() {
    this.spinerOn=true;
    this.sesionService.login(this.email, this.password).subscribe( data => {
      console.log(data);


      localStorage.setItem('auth-token', data['access_token']);
      localStorage.setItem('usuarioid', data['usuario']['id']);
      localStorage.setItem('avatar', data['usuario']['avatar']);
      this.sesionService.loginSession(data['access_token']);
        this.spinerOn=false;
    },
      error1 => {
        console.log(error1);
        this.spinerOn=false;
        this.openSnackBar('Usuario o password Erroneo!');
      });
  }

  ingreso() {
    this.apiService.post('auth/register', this.usuario).subscribe(data=>{
      console.log(data);
      if (data['status']===200) {
        this.openSnackBar('Usuario creado!');
        this.vista='login';
      }

    },
      error1 => {
        this.openSnackBar('Problemas creando usuario, correo ya existente');
      })

  }

  registrar() {
    this.vista='registrar';
  }

  volver() {
    this.vista='login';
  }
  openSnackBar(message: string) {
    console.log("abriendo snackbar");
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }
}
