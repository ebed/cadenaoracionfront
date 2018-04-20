import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {ApiService} from "../../services/api.service";
import {TiposService} from "../../services/tipos.service";
import {Tipo} from "../../models/tipo";
import {Peticion} from "../../models/peticion";
import {PeticionesService} from "../../services/peticiones.service";

@Component({
  selector: 'app-formulario-peticion',
  templateUrl: './formulario-peticion.component.html',
  styleUrls: ['./formulario-peticion.component.css']
})
export class FormularioPeticionComponent implements OnInit {
  options;

  constructor(private tipoServices:TiposService,
              private peticionServices:PeticionesService,
              fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }
  floatLabel: 'auto';
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
    this.peticionServices.creaPeticion(this.titulo, this.descripcion, 1, this.tiposeleccionado).subscribe((r) => {
      console.log(r);


    });;
  }

}
