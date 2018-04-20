import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../models/usuario";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private apiService:ApiService) { }
  usuario:Usuario=new Usuario();
  ngOnInit() {
    console.log("Carga Inicial");
    this.apiService.get('usuarios?id='+localStorage.getItem('usuarioid')).subscribe(data=> {
      console.log(data);
      this.usuario=data.usuario;
    })
  }

  update() {
    this.apiService.update('usuarios',this.usuario).subscribe(data=>{
      console.log(data);
    })
  }

}
