import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatTableModule,MatCardModule,MatSidenavModule} from '@angular/material';

import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
 import { MenulateralComponent } from './component/menulateral/menulateral.component';
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
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackbarsComponent } from './component/snackbars/snackbars.component';
import { MensajesComponent } from './component/mensajes/mensajes.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatIconRegistry, MatIconModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import { PeticionesComponent } from './component/peticiones/peticiones.component';
import { LeermensajesComponent } from './component/mensajes/leermensajes/leermensajes.component';
import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { CompromisosComponent } from './component/peticiones/compromisos/compromisos.component';
import { MisPeticionesComponent } from './component/peticiones/peticiones/peticiones.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { LeerpeticionComponent } from './component/grillapeticiones/leerpeticion/leerpeticion.component';
import {SharePeticionsService} from "./services/share-peticions.service";
import { FormulariomensajeComponent } from './component/formulariomensaje/formulariomensaje.component';
import {ShareMensajesService} from "./services/share-mensajes-services";
import { LecturamensajesComponent } from './component/lecturamensajes/lecturamensajes.component';
import {MensajesService} from "./services/mensajes.service";

@NgModule({
  declarations: [
    AppComponent,
    MenulateralComponent,
    FormularioPeticionComponent,
    LoginComponent,
    PerfilComponent,
    GrillapeticionesComponent,
    TomarpeticionComponent,
    RegistrarComponent,
    SnackbarsComponent,
    MensajesComponent,
    PeticionesComponent,
    LeermensajesComponent,
    CompromisosComponent,
    MisPeticionesComponent,
    LeerpeticionComponent,
    FormulariomensajeComponent,
    LecturamensajesComponent
  ],
  imports: [
    MatExpansionModule,
    MatTabsModule,
    VirtualScrollModule,
    MatIconModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
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
  providers: [PeticionesService, ApiService, TiposService, VistaService, SessionService, SharePeticionsService, ShareMensajesService, MensajesService],
  bootstrap: [AppComponent],
  entryComponents: [TomarpeticionComponent, FormularioPeticionComponent, LeermensajesComponent  ]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl("/assets/mdi.svg")); // Or whatever path you placed mdi.svg at
  }
}
