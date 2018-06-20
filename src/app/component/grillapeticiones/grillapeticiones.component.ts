import { Component, OnInit, Inject } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatDialogConfig} from '@angular/material';
import {PeticionesService} from "../../services/peticiones.service";
import {TomarpeticionComponent} from "../tomarpeticion/tomarpeticion.component";
import {Intercesor} from "../../models/intercesor";
import {ApiService} from "../../services/api.service";
import {LeerpeticionComponent} from "./leerpeticion/leerpeticion.component";
import {VistaService} from "../../services/vista.service";
import {SharePeticionsService} from "../../services/share-peticions.service";

@Component({
  selector: 'app-grillapeticiones',
  templateUrl: './grillapeticiones.component.html',
  styleUrls: ['./grillapeticiones.component.css']
})
export class GrillapeticionesComponent implements OnInit {

  constructor(private vistaService:VistaService,
              public servicioPeticiones: SharePeticionsService,
              private peticionesServices: PeticionesService,
              public dialog : MatDialog, public apiService : ApiService,
              public snackBar: MatSnackBar  ) {
  }

  displayedColumns = ['titulo', 'tipo',  'fechacreacion'];
  dataSource;
  spinerOn=true;

  ngOnInit() {
    this.cargarPeticiones();

  }
  intercesor: Intercesor = new Intercesor();

  cargarPeticiones() {
    this.spinerOn=true;
    console.log("CArgando");
    this.peticionesServices.getPeticiones("totalpendientes").subscribe(data=> {
      this.dataSource = data;
      console.log(data);
      this.spinerOn=false;
    });
    console.log("Finaliza carga");
  }




  selecciona(row) {
    console.log(row);
    this.servicioPeticiones.setPeticion(row);

    this.vistaService.setVista('leerpeticion');
  }


  public  acepto(id){

    this.intercesor.peticion_id = id;
    this.intercesor.usuario_id = parseInt(localStorage.getItem('usuarioid'),10);

    this.apiService.post('interceder',this.intercesor).subscribe(data=>{
      this.cargarPeticiones();
      this.openSnackBar("La petición fue agregada a tu lista de compromisos")
    });
  }

  public enviarmensaje(row) {
    let dialogo=this.dialog.open(TomarpeticionComponent, {
      data: {peticion: row, tipo: 'mensaje', vista: 'mensaje'}
    });
    dialogo.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });

  }

  imagenTipoOracion(tipo) {
    if (tipo==='Intercesion') {
      return 'assets/oracion.png';
    }
    if (tipo==='Agradecimiento') {
      return 'assets/gracias.png';
    }
    if (tipo==='Necesidad') {
      return 'assets/peticion.png';
    }
  }

  public iconPeticion(tipo):string {
    if (tipo==='Necesidad') {
      return 'lifebuoy';
    }
  }
  openSnackBar(message: string) {
    console.log("abriendo snackbar");
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }
}
