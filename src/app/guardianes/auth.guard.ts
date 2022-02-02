import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {LoginService} from "../servicios/login.service";

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private loginService:LoginService,
              private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.loginService.isAutenticado()){
      console.log("Hola bien")
      return true;
    } else{
      this.router.navigate(['login']);
      return false;
    }
  }

}
