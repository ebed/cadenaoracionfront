import { Component, OnInit, Inject } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {PeticionesService} from "../../services/peticiones.service";
import {TomarpeticionComponent} from "../tomarpeticion/tomarpeticion.component";

@Component({
  selector: 'app-grillapeticiones',
  templateUrl: './grillapeticiones.component.html',
  styleUrls: ['./grillapeticiones.component.css']
})
export class GrillapeticionesComponent implements OnInit {

  constructor(private peticionesServices: PeticionesService, public dialog : MatDialog) {
  }

  displayedColumns = ['titulo', 'tipo', 'estado', 'usuario', 'fechacreacion'];
  dataSource;


  ngOnInit() {
    this.dataSource = this.peticionesServices.getPeticiones("totalpendientes");

  }




  selecciona(row) {
    console.log(row);

    this.dialog.open(TomarpeticionComponent, {
      data: {peticion: row} ,width : '420px'
    });

  }



}
