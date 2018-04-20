import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {Peticion} from "../../models/peticion";
import {ApiService} from "../../services/api.service";
import {Intercesor} from "../../models/intercesor";
@Component({
  selector: 'app-tomarpeticion',
  templateUrl: './tomarpeticion.component.html',
  styleUrls: ['./tomarpeticion.component.css']
})
export class TomarpeticionComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<TomarpeticionComponent>,
              private apiService: ApiService,
              @Inject(MAT_DIALOG_DATA) public data : any) {

  }


  peticion:Peticion = new Peticion();
  intercesor:Intercesor = new Intercesor();

  public acepto(){

    this.intercesor.peticion_id = this.peticion.id;
    this.intercesor.usuario_id = parseInt(localStorage.getItem('usuarioid'),10);

    this.apiService.post('interceder',this.intercesor).subscribe(data=>{
      console.log(data);
    });
    this.dialogRef.close();
  }

  public noacepto(){
    this.dialogRef.close();
  }


  ngOnInit() {
    console.log(this.data.peticion);
    this.peticion = this.data.peticion;
  }

}
