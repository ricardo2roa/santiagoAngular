import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class graficaService{
  arreglo:number[] = [];

  pushArreglo(valor:number){
    if(this.arreglo.length >= 60){

      this.arreglo = []
      this.arreglo.push(valor);

    }else{
      this.arreglo.push(valor);
    }
  }

}
