import { Component, OnInit } from '@angular/core';
import {PeticionesService} from "../../services/peticiones.service";

@Component({
  selector: 'app-bandejaentrada',
  templateUrl: './bandejaentrada.component.html',
  styleUrls: ['./bandejaentrada.component.css']
})



export class BandejaentradaComponent implements OnInit {

  constructor(private peticionesServices: PeticionesService) { }

  displayedColumns = ['titulo', 'tipo', 'estado', 'usuario', 'fechacreacion'];
  dataSource ;


  ngOnInit() {
    this.peticionesServices.getPeticiones( "solicitudes").subscribe(data=> {
      this.dataSource =  data;
      console.log(data);
    });
    console.log(this.dataSource);

  }



}

