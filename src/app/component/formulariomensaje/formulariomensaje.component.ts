import { Component, OnInit } from '@angular/core';
import {SharePeticionsService} from "../../services/share-peticions.service";
import {Peticion} from "../../models/peticion";

@Component({
  selector: 'app-formulariomensaje',
  templateUrl: './formulariomensaje.component.html',
  styleUrls: ['./formulariomensaje.component.css']
})
export class FormulariomensajeComponent implements OnInit {

  peticion: Peticion;
  constructor(public peticionesService: SharePeticionsService ) {
    this.peticion = peticionesService.getPeticion();
  }

  ngOnInit() {
  }

}
