import { Component, OnInit } from '@angular/core';
import {VistaService} from "../../services/vista.service";
import {SessionService} from "../../services/session.service";

@Component({
  selector: 'app-menulateral',
  templateUrl: './menulateral.component.html',
  styleUrls: ['./menulateral.component.css']
})
export class MenulateralComponent implements OnInit {
  events = [];
  vista="";
  opened=false;

  constructor(private vistaService:VistaService,
              public sesionService:SessionService) { }

  ngOnInit() {
    console.log(this.vistaService.getVista());
    this.vista=this.vistaService.getVista()
  }

  public isVisible(vista) {
    return vista === this.vista;
  }

  public setVista(vista) {
    console.log(vista);
    this.vistaService.setVista(vista);
    this.vista=vista;
    console.log(this.vista);

  }

  public logout() {
    this.sesionService.logout();
  }

}
