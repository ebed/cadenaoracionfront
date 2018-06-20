import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Mensaje} from "../../models/mensaje"
import {MatDialog, MatDialogConfig, MatSnackBar} from "@angular/material";
import {TomarpeticionComponent} from "../tomarpeticion/tomarpeticion.component";
import {LeermensajesComponent} from "./leermensajes/leermensajes.component";
import {VistaService} from "../../services/vista.service";
import {ShareMensajesService} from "../../services/share-mensajes-services";

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  recibidos:Array<Mensaje>=new Array();
  enviados:Array<Mensaje>=new Array();
  constructor( public dialog : MatDialog, public apiService:ApiService,  public snackBar: MatSnackBar,
               public vistaService: VistaService,
               public mensajeService: ShareMensajesService) { }

  ngOnInit() {
    this.cargaMensajes();
  }

  leerMensaje(mensaje) {
    this.mensajeService.setMensaje(mensaje);
    this.vistaService.setVista('leermensaje');
   /* const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    dialogConfig.data = {peticion: peticion.id};
    console.log(peticion);
    let dialogo=this.dialog.open(LeermensajesComponent, dialogConfig);
    dialogo.afterClosed().subscribe(result => {

      console.log('The dialog was closed');


    });
    */


  }

  noleido(mensaje) {
    this.apiService.update("mensajeria?accion=noleido", mensaje).subscribe( data => {
      console.log("Mensaje actualizado");
      this.cargaMensajes();
    });
  }

  elimina(mensaje) {
    console.log(mensaje);
    this.apiService.delete("mensajeria?id="+mensaje.id).subscribe( data => {
      console.log("Mensaje actualizado");
      this.cargaMensajes();
      this.openSnackBar('Mensaje eliminado');
    });
  }

  public cargaMensajes() {
    this.apiService.get("mensajeria?tipo=enviados&usuario_id="+localStorage.getItem('usuarioid')).subscribe(data=> {
      console.log(data);
      this.enviados=data;
    })

    this.apiService.get("mensajeria?tipo=peticiones&usuario_id="+localStorage.getItem('usuarioid')).subscribe(data=> {
      console.log(data);
      this.recibidos=data;
    })
  }

  /* TODO: Mejorar la mensajeria */


  openSnackBar(message: string) {
    console.log("abriendo snackbar");
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }
}
