import { Component, OnInit } from '@angular/core';
import { Login } from '../common/data/login';
import { LoginService } from '../common/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login : Login = new Login();

  message : string; 

  onLogin(){
   this.message = "donnees saisies = " + JSON.stringify(this.login);
  }

  constructor(private loginService : LoginService) { }

  ngOnInit(): void {
  }

}
