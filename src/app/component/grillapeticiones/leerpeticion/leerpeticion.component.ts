import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar} from "@angular/material";
import {LeermensajesComponent} from "../../mensajes/leermensajes/leermensajes.component";
import {ApiService} from "../../../services/api.service";
import {Peticion} from "../../../models/peticion";
import {Intercesor} from "../../../models/intercesor";
import {SharePeticionsService} from "../../../services/share-peticions.service";
import {VistaService} from "../../../services/vista.service";

@Component({
  selector: 'app-leerpeticion',
  templateUrl: './leerpeticion.component.html',
  styleUrls: ['./leerpeticion.component.css']
})
export class LeerpeticionComponent implements OnInit {

  intercesor: Intercesor = new Intercesor();

  peticion: Peticion;

  constructor(private apiService: ApiService,
              public peticionService: SharePeticionsService,
              public vistaService: VistaService,
              public snackBar: MatSnackBar) {


  }

  ngOnInit() {
    console.log("iniciando carga leer peticion");
    this.peticion = this.peticionService.getPeticion();
    console.log(this.peticionService.getPeticion());

  }

  public  acepto(){

    this.intercesor.peticion_id = this.peticion.id;
    this.intercesor.usuario_id = parseInt(localStorage.getItem('usuarioid'),10);

    this.apiService.post('interceder',this.intercesor).subscribe(data=>{
      console.log(data);
      this.openSnackBar("Usted se ha comprometido a estar orando por esa petición. Felicidades!");
      this.volver();
    });

   // this.dialogRef.close();
  }

  volver() {
    this.vistaService.setVista('grilla');
  }


  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }
}
