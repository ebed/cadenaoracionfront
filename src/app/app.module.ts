import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatTableModule,MatCardModule,MatSidenavModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BandejaentradaComponent } from './component/bandejaentrada/bandejaentrada.component';
import { MenulateralComponent } from './component/menulateral/menulateral.component';
import { BandejasalidaComponent } from './component/bandejasalida/bandejasalida.component';
import {PeticionesService} from "./services/peticiones.service";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {ApiService} from "./services/api.service";
import { FormularioPeticionComponent } from './component/formulario-peticion/formulario-peticion.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {TiposService} from "./services/tipos.service";
import {VistaService} from "./services/vista.service";
import { LoginComponent } from './component/login/login.component';
import {SessionService} from "./services/session.service";
import { PerfilComponent } from './component/perfil/perfil.component';
import { GrillapeticionesComponent } from './component/grillapeticiones/grillapeticiones.component';
import {MatDialogModule} from '@angular/material/dialog';
import { TomarpeticionComponent } from './component/tomarpeticion/tomarpeticion.component';
import { RegistrarComponent } from './component/registrar/registrar.component';
@NgModule({
  declarations: [
    AppComponent,
    BandejaentradaComponent,
    MenulateralComponent,
    BandejasalidaComponent,
    FormularioPeticionComponent,
    LoginComponent,
    PerfilComponent,
    GrillapeticionesComponent,
    TomarpeticionComponent,
    RegistrarComponent
  ],
  imports: [
    MatDialogModule,
    MatGridListModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatFormFieldModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatCardModule,
    MatSidenavModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PeticionesService, ApiService, TiposService, VistaService, SessionService],
  bootstrap: [AppComponent],
  entryComponents: [TomarpeticionComponent]
})
export class AppModule { }
