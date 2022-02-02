import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableroComponent} from "./componentes/tablero/tablero.component";
import {LoginComponent} from "./componentes/login/login.component";
import {RegistroComponent} from "./componentes/registro/registro.component";
import {NoEncontradoComponent} from "./componentes/no-encontrado/no-encontrado.component";
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "./guardianes/auth.guard";

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
