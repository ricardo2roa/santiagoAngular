import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceroComponent } from './componentes/cabecero/cabecero.component';
import { LoginComponent } from './componentes/login/login.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {LoginService} from "./servicios/login.service";

import {graficaService} from "./servicios/grafica.service";
import {DataService} from "./servicios/data.service";
import {AppRoutingModule} from "./app-routing.module";
import {environment} from "../environments/environment";
import {HighchartsChartModule} from "highcharts-angular";
import {AuthGuard} from "./guardianes/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    LoginComponent,
    NoEncontradoComponent,
    PiePaginaComponent,
    RegistroComponent,
    TableroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase,'santiagoAngular'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HighchartsChartModule
  ],
  providers: [LoginService, AuthGuard, graficaService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
