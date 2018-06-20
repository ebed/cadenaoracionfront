import { Component, OnInit } from '@angular/core';
import {Mensaje} from "../../models/mensaje";
import {SharePeticionsService} from "../../services/share-peticions.service";
import {Peticion} from "../../models/peticion";
import {ShareMensajesService} from "../../services/share-mensajes-services";
import {MensajesService} from "../../services/mensajes.service";

@Component({
  selector: 'app-lecturamensajes',
  templateUrl: './lecturamensajes.component.html',
  styleUrls: ['./lecturamensajes.component.css']
})
export class LecturamensajesComponent implements OnInit {
  mensajes: Array<Mensaje>;
  mensaje: Mensaje;
  constructor(public sharedMensajeService: ShareMensajesService,
              public mensajesServices: MensajesService) {


    this.mensaje = sharedMensajeService.getMensaje();
    console.log(this.mensaje);
    mensajesServices.getMensajesPeticion(this.mensaje.peticion_id).subscribe(data => {
      console.log(data);
      this.mensajes = data;
    })
  }

  ngOnInit() {
  }

}
