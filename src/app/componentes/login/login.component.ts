import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../servicios/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password:string;

  constructor(private router:Router,
              private loginService: LoginService
  ) { }

  ngOnInit(): void {
    if(this.loginService.isAutenticado()){
      this.router.navigate(['/']);
    }

  }

  login(){
    this.loginService.auth.emit(true);
    this.loginService.login(this.email,this.password);
  }
}
