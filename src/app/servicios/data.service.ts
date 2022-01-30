import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LoginService} from "./login.service";
import {catchError} from "rxjs/operators";
import {PlantaModel} from "../modelo/planta.model";
import {of} from "rxjs";

@Injectable()
export class DataService{
  token:string | null

  constructor(private httpClient: HttpClient,private login:LoginService){}

  cargarPersona(){

    const token = this.login.getIdToken()

    return this.httpClient.get('https://proyecto-planta-b80cd-default-rtdb.firebaseio.com/Planta.json?auth='+token);
  }

  modificarVeces(planta:PlantaModel){
    const token  = this.login.getIdToken()
    let url:string
    url = 'https://proyecto-planta-b80cd-default-rtdb.firebaseio.com/Planta.json?auth='+token;
    this.httpClient.put(url,planta).subscribe();
  }
}
