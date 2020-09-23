import { Component, OnInit } from '@angular/core';
import { Login } from '../common/data/login';
import { LoginService } from '../common/service/login.service';
import { LoginResponse } from '../common/data/loginResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login : Login = new Login("admin1","pwdadmin1","admin");

  message : string; 

  onLogin(){
   this.message = "donnees saisies = " + JSON.stringify(this.login);
   this.loginService.postLogin(this.login)
                    .subscribe(
                      (loginResponse : LoginResponse)=>{  this.message = JSON.stringify(loginResponse);     },
                      (error)=> { console.log(error); this.message ="erreur ..."}
                    );
  }

  constructor(private loginService : LoginService) { }

  ngOnInit(): void {
  }

}
