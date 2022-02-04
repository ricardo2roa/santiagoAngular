import { Component, OnInit } from '@angular/core';
import {PlantaModel} from "../../modelo/planta.model";
import {HttpClient} from "@angular/common/http";
import {DataService} from "../../servicios/data.service";
import {graficaService} from "../../servicios/grafica.service";
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  varray:number[] = [];
  activo:boolean = true

  planta:PlantaModel = {
    Humedad: 0,
    nveces: 0,
  };

  constructor(private http: HttpClient, private grafica: graficaService, private data:DataService) { }

  ngOnInit(): void {
    this.data.cargarPersona().subscribe(
      (res:any)=>{
        console.log(res)
        this.planta.Humedad = res.Humedad
        this.grafica.pushArreglo(res.Humedad);
        this.rep();
      }
    );
  }

  highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    title: {
      text: "Grafica de Humedad"
    },
    yAxis: {
      title: {
        text: "Humedad en porcentaje"
      }
    },chart:{
      width: 350
    },
    series: [{
      data: [],
      type: 'line'
    }]
  }

  rep(){
    setInterval(()=>{
      this.data.cargarPersona().subscribe(
        (res:any)=>{

          let activo = true

          this.planta.Humedad = res.Humedad
          this.planta.nveces = res.nveces
          console.log(res.nveces)
          this.grafica.pushArreglo(res.Humedad);

          this.varray = this.grafica.arreglo;

          if(res.Humedad <= 60 && this.activo){
            if(typeof this.planta.nveces != "undefined"){
              this.planta.nveces++
            }
            this.activo = false

            this.data.modificarVeces(this.planta)
          }else if(res.Humedad > 60){
            this.activo = true
          }

          this.chartOptions = {
            series: [{
              data: this.varray,
              type: 'line'
            }]
          }

        }
      );
    }, 1000);
  }

}
