import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableroComponent} from "./componentes/tablero/tablero.component";
import {AuthGuard} from "@angular/fire/auth-guard";
import {LoginComponent} from "./componentes/login/login.component";
import {RegistroComponent} from "./componentes/registro/registro.component";
import {NoEncontradoComponent} from "./componentes/no-encontrado/no-encontrado.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: TableroComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'registrarse', component:RegistroComponent},
  {path:'**',component: NoEncontradoComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
