import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatSnackBar} from "@angular/material";
import {PeticionesService} from "../../services/peticiones.service";
import {TomarpeticionComponent} from "../tomarpeticion/tomarpeticion.component";
import {FormularioPeticionComponent} from "../formulario-peticion/formulario-peticion.component";
import {Peticion} from "../../models/peticion";

@Component({
  selector: 'app-peticiones',
  templateUrl: './peticiones.component.html',
  styleUrls: ['./peticiones.component.css']
})
export class PeticionesComponent implements OnInit {


  spinerOn=true;

  dataSource;
  constructor(private peticionesServices: PeticionesService, public dialog : MatDialog,  public snackBar: MatSnackBar) { }
  viewPortItemsCompromisos: Peticion[];
  viewPortPeticiones: Peticion[];

  ngOnInit() {

  }



}
