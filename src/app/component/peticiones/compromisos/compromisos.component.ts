import { Component, OnInit } from '@angular/core';
import {PeticionesService} from "../../../services/peticiones.service";
import {MatDialog, MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-compromisos',
  templateUrl: './compromisos.component.html',
  styleUrls: ['./compromisos.component.css']
})
export class CompromisosComponent implements OnInit {

  constructor(private peticionesServices: PeticionesService, public dialog : MatDialog,  public snackBar: MatSnackBar) { }
  spinerOn=true;
  dataSource;
  ngOnInit() {

    this.cargaPeticiones();
  }

  cargaPeticiones() {
    this.spinerOn=true  ;
    this.peticionesServices.getPeticiones( "solicitudes").subscribe(data=> {
      this.dataSource =  data;
      console.log(data);
      this.spinerOn=false;

    });


  }

  cancela(id) {
    this.peticionesServices.anulaIntercesion(id).subscribe(data=>{
      console.log(data);
      this.cargaPeticiones();
      this.openSnackBar('Tu compromiso a orar por esta petición fue cancelado.');
    });
  }
  openSnackBar(message: string) {
    console.log("abriendo snackbar");
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }

}
