import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../servicios/login.service";
import {Router} from "@angular/router";
import {DataService} from "../../servicios/data.service";
import {PlantaModel} from "../../modelo/planta.model";

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  isLoggedIn: boolean = false;
  loggedInUser: string | null;
  mostrarRegistro: boolean | undefined;

  planta:PlantaModel = {
    Humedad: 0,
    nveces: 0,
  };

  constructor(private loginService:LoginService,
              private router:Router, private data:DataService) {
    this.loginService.auth.subscribe((val : boolean) => this.isLoggedIn = val);
  }



  ngOnInit(): void {
    /*
            if(this.loginService.isAutenticado()){
              this.isLoggedIn = true;
              //this.loggedInUser = auth.email;
            }else{
              this.isLoggedIn = false;
            }*/
    //console.log(this.loginService.isAutenticado())
    /*
        this.configuracionService.getConfiguracion().subscribe(
          (configuracion:any) => {
            this.mostrarRegistro = configuracion.permitirRegistro;
          });*/
  }

  logout(){
    this.isLoggedIn = false;
    this.planta.Humedad = 0
    this.planta.nveces = 0
    this.data.modificarVeces(this.planta)
    this.router.navigate(['/login']);
    this.loginService.logout();
  }
}
