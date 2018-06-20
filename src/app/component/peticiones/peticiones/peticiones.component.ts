import { Component, OnInit } from '@angular/core';
import {PeticionesService} from "../../../services/peticiones.service";
import {MatDialog, MatDialogConfig, MatSnackBar} from "@angular/material";
import {TomarpeticionComponent} from "../../tomarpeticion/tomarpeticion.component";
import {FormularioPeticionComponent} from "../../formulario-peticion/formulario-peticion.component";
import {SharePeticionsService} from "../../../services/share-peticions.service";
import {VistaService} from "../../../services/vista.service";

@Component({
  selector: 'app-mispeticiones',
  templateUrl: './peticiones.component.html',
  styleUrls: ['./peticiones.component.css']
})
export class MisPeticionesComponent implements OnInit {

  constructor(private peticionesServices: PeticionesService,
              public dialog : MatDialog,
              public snackBar: MatSnackBar,
              public vistaService: VistaService,
              public peticionService : SharePeticionsService) { }
  spinerOn=true;
  mispeticiones;
  ngOnInit() {
    this.cargaMisPeticiones();
  }

  cargaMisPeticiones() {
    this.spinerOn=true;
    this.peticionesServices.getPeticiones( "peticiones").subscribe( data => {
      this.mispeticiones = data;
      console.log(data);
      this.spinerOn=false;

    });
  }




  elimina(id){
    console.log("Elimina "+ id);
    this.spinerOn=true;
    this.peticionesServices.cancelaPeticion(id).subscribe(data=>{
      console.log(data);
      this.cargaMisPeticiones();
      this.spinerOn=false;
      this.openSnackBar('Petición ha sido eliminada');
    });
  }

  finaliza(id){
    console.log("Finaliza "+ id);
    this.spinerOn=true;
    this.peticionesServices.finalizaPeticion(id).subscribe(data=>{
      console.log(data);
      this.cargaMisPeticiones();
      this.spinerOn=false;
      this.openSnackBar('Petición finalizó');
    });

  }

  public enviarmensaje(row) {
  /*  const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = '100%';
    dialogConfig.minHeight = '100%';

    dialogConfig.data = {peticion: row, tipo: 'general', vista: 'mensaje'};



    let dialogo=this.dialog.open(TomarpeticionComponent,  dialogConfig) ;
    dialogo.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });**/
    this.peticionService.setPeticion(row);
    this.vistaService.setVista('enviarmensaje');
  }

  public addPeticion() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = '100%';
    dialogConfig.minHeight = '100%';

    let dialogo=this.dialog.open(FormularioPeticionComponent, dialogConfig );
    dialogo.afterClosed().subscribe(result => {


      console.log('The dialog was closed');

    });
  }


  openSnackBar(message: string) {
    console.log("abriendo snackbar");
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }

}
