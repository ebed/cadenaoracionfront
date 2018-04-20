import { Component, OnInit } from '@angular/core';
import {PeticionesService} from "../../services/peticiones.service";

@Component({
  selector: 'app-bandejasalida',
  templateUrl: './bandejasalida.component.html',
  styleUrls: ['./bandejasalida.component.css']
})
export class BandejasalidaComponent implements OnInit {


  constructor(private peticionesServices: PeticionesService) { }
  displayedColumns = ['titulo', 'tipo', 'estado', 'usuario', 'fechacreacion'];
  dataSource;
  ngOnInit() {
    this.dataSource=this.peticionesServices.getPeticiones( "peticiones");

  }

}







