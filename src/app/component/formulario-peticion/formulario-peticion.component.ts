import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {TiposService} from "../../services/tipos.service";
import {Tipo} from "../../models/tipo";
import {PeticionesService} from "../../services/peticiones.service";
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from "@angular/material";
import {VistaService} from "../../services/vista.service";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-formulario-peticion',
  templateUrl: './formulario-peticion.component.html',
  styleUrls: ['./formulario-peticion.component.css']
})
export class FormularioPeticionComponent implements OnInit {
  options;

  constructor(private tipoServices:TiposService,
              private peticionServices:PeticionesService,
              private dialogRef: MatDialogRef<FormularioPeticionComponent>,
              private apiService: ApiService,
              @Inject(MAT_DIALOG_DATA) public data : any,
              fb: FormBuilder,
              public snackBar: MatSnackBar,
              private vistaService:VistaService) {

  }

  titulo: string;
  descripcion: string;

  tipos;
  tiposeleccionado: Tipo;

  ngOnInit() {
    console.log(this.tipoServices.getTipos());
    this.tipoServices.getTipos().subscribe(data=>{
      this.tipos = data;
    });
  }

  ingresaPeticion(){
    console.log("Creando peticion "+ this.tiposeleccionado);
    this.peticionServices.creaPeticion(this.titulo, this.descripcion,  localStorage.getItem('usuarioid'), this.tiposeleccionado).subscribe((r) => {
      console.log(r['status']);
      if (r['status']===200) {
        this.openSnackBar("Petición ingresada correctamente");
        this.vistaService.setVista('peticiones');
      }
        this.cerrarDialogo();

      },
      error1 => {
        console.log(error1.error);
        this.openSnackBar("Problemas ingresando petición");

      });
  }

  cerrarDialogo() {
    this.dialogRef.close();
  }


  openSnackBar(message: string) {
    console.log("abriendo snackbar");
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }
}
