import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../models/usuario";
import {ApiService} from "../../services/api.service";
import {VistaService} from "../../services/vista.service";
import {SessionService} from "../../services/session.service";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private apiService:ApiService,
              public sesionService: SessionService,
              private vistaService: VistaService,  public snackBar: MatSnackBar) { }
  usuario:Usuario=new Usuario();

  ngOnInit() {
    console.log("Carga Inicial");
    this.apiService.get('usuarios?id='+localStorage.getItem('usuarioid')).subscribe(data=> {

      this.usuario=data.usuario;
    })
  }

  update() {
    this.apiService.update('usuarios',this.usuario).subscribe(data=>{
      console.log(data);
      this.vistaService.setVista("grilla");
      this.openSnackBar('Perfil actualizado');

    })
  }



  /* TODO: Agregar el tomar foto de camara */

  upload(event) {
    console.log("CAmbia imagen");


    const formData = new FormData();
    formData.append("image", event.target.files[0]);

    this.apiService.request('usuarios/changeavatar?usuario='+localStorage.getItem('usuarioid'),formData).subscribe(data => {
      console.log(data["resultado"]);
      this.usuario=data["resultado"];
    })
  }

   readThis(inputValue: any): void {




    var myReader:FileReader = new FileReader();

    myReader.onloadend = (e) => {

      console.log(e);
      console.log(myReader.result);
      this.usuario.avatar = myReader.result;
      this.openSnackBar('Avatar cambiado exitosamente');
    }

  }


  openSnackBar(message: string) {
    console.log("abriendo snackbar");
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }
}
