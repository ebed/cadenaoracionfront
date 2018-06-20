import { Component, OnInit } from '@angular/core';
import {VistaService} from "../../services/vista.service";
import {SessionService} from "../../services/session.service";
import {MatSnackBar} from "@angular/material";
import {Peticion} from "../../models/peticion";
import {SharePeticionsService} from "../../services/share-peticions.service";
import {ShareMensajesService} from "../../services/share-mensajes-services";

@Component({
  selector: 'app-menulateral',
  templateUrl: './menulateral.component.html',
  styleUrls: ['./menulateral.component.css']
})
export class MenulateralComponent implements OnInit {
  events = [];
  vista;
  nombrevista="";
  opened=false;
  avatar = '';
  titulo='';
  peticion: Peticion;

  constructor(private vistaService:VistaService,
              public sesionService:SessionService,
              public peticionService: SharePeticionsService,
              public mensajeService: ShareMensajesService,
              public snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.vistaService.setVista('grilla');

    this.vistaService.getVista().subscribe( data => {
      this.vista = data;
    });

    this.vistaService.getNombreVista().subscribe( data => {
      console.log(data);
      this.nombrevista = data;
    });
    this.avatar = localStorage.getItem('avatar');
  }

  public isVisible(vista) {
    return (vista === this.vista);
  }

  public setVista(vista) {
    console.log(vista);
    this.vistaService.setVista(vista);


    console.log(this.vista);

  }

  vistaprincipal() {
    if (this.vista === 'leerpeticion' || this.vista === 'enviarmensaje') {
      this.titulo = this.peticionService.getPeticion().titulo;
      return false;
    } else if (this.vista === 'leermensajes') {
      this.titulo = this.mensajeService.getMensaje().peticion;
      return false;
    } else {
        return true;
      }

  }

  volver() {
    this.setVista('grilla');
  }





  openSnackBar(message : string) {
    console.log("abriendo snackbar");
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }

  public logout() {
    this.sesionService.logout();
  }

}
