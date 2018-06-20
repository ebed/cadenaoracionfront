import {Component, Inject, OnInit} from '@angular/core';
import {TomarpeticionComponent} from "../../tomarpeticion/tomarpeticion.component";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {ApiService} from "../../../services/api.service";
import {Mensaje} from "../../../models/mensaje";
import {Peticion} from "../../../models/peticion";

@Component({
  selector: 'app-leermensajes',
  templateUrl: './leermensajes.component.html',
  styleUrls: ['./leermensajes.component.css']
})
export class LeermensajesComponent implements OnInit {

  mensaje:Mensaje = new Mensaje();
  mensajes: Array<Mensaje> = [];

  constructor(private dialogRef: MatDialogRef<LeermensajesComponent>,
              private apiService: ApiService,
              public dialog : MatDialog,
              @Inject(MAT_DIALOG_DATA) public data : any) { }



  ngOnInit() {
    let peticion_id = this.data.peticion;
    console.log(this.data);

    this.apiService.get('mensajeria?tipo=listadoMensajesPeticion&peticion_id='+peticion_id).subscribe(data => {
      console.log(data);
      this.mensajes = data;
    })



  }


  responder() {
    this.dialogRef.close();
    let peticion: Peticion=new Peticion();
    peticion.id = this.mensaje.peticion_id;

    let dialogo=this.dialog.open(TomarpeticionComponent, {
      data: {peticion: peticion, mensaje: this.mensaje, tipo: 'respuesta', vista: 'mensaje'}
    });
    dialogo.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}
