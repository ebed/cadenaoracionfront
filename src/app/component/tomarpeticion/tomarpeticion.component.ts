import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatSnackBar} from '@angular/material';
import {Peticion} from "../../models/peticion";
import {ApiService} from "../../services/api.service";
import {Intercesor} from "../../models/intercesor";
import {Mensaje} from "../../models/mensaje";
@Component({
  selector: 'app-tomarpeticion',
  templateUrl: './tomarpeticion.component.html',
  styleUrls: ['./tomarpeticion.component.css']
})
export class TomarpeticionComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<TomarpeticionComponent>,
              private apiService: ApiService,
              public snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public data : any) {

  }


  peticion:Peticion = new Peticion();
  intercesor:Intercesor = new Intercesor();
  mensaje:string="";

  vista:String='mensaje';
  tipo;

  options;



  public  acepto(){

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

  public enviarmensaje() {
    this.vista='mensaje';
  }


  /*TODO: Filtrar las peticiones ya tomadas, marcandolas y no permitiendo seleccionar sino eliminar*/

  public enviar() {
    console.log(this.tipo);

    console.log("Envio de mensaje : "+this.mensaje);
    let mensajeTemp= new Mensaje();
    mensajeTemp.contenido=this.mensaje;
    mensajeTemp.usuario_id=parseInt(localStorage.getItem('usuarioid'),10);
    mensajeTemp.peticion_id= this.peticion.id;

    if (this.tipo === "general") {

      console.log("Envio tipo broadcast");
      this.apiService.post("mensajeria?tipo=general", mensajeTemp).subscribe(data=>{
        console.log(data);
        this.openSnackBar("Mensaje enviado correctamente.");
        this.dialogRef.close();
      })

    } else if (this.tipo === "respuesta") {
      console.log("REspuesat");
      mensajeTemp.destinatario_id = this.data.mensaje.usuario_id;
      this.apiService.post("mensajeria?tipo=respuesta", mensajeTemp).subscribe(data=>{
        this.openSnackBar("Mensaje enviado correctamente.");
        console.log(data);
        this.dialogRef.close();
      })

    } else {
      this.apiService.post("mensajeria", mensajeTemp).subscribe(data=>{
        console.log(data);
        this.openSnackBar("Mensaje enviado correctamente.");
        this.dialogRef.close();
      })

    }

  }


  public cargaMensajes(id) {
    this.apiService.get('mensajeria?tipo=listadoMensajesPeticion&&peticion_id='+id).subscribe( data => {
      this.mensaje = data.resultado;
    })
  }

  public cancelar() {

    this.mensaje="";
    this.dialogRef.close();
  }

  ngOnInit() {



    this.peticion = this.data.peticion;
 //   this.cargaMensajes(this.peticion);
    this.tipo = this.data.tipo;
    this.vista = this.data.vista;
  }

  openSnackBar(message: string) {
    console.log("abriendo snackbar");
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }
}
