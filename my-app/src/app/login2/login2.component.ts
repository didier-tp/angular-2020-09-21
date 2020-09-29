import { Component, OnInit } from '@angular/core';
import { LoginService } from '../common/service/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidateRole } from '../common/validators/roles.validator';
import { Login } from '../common/data/login';
import { LoginResponse } from '../common/data/loginResponse';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {

  //login : Login = new Login("admin1","pwdadmin1","admin");
  myForm: FormGroup;
  message : string; 

  onLogin(){
   this.message = "donnees saisies = " + JSON.stringify(this.myForm.value);
   let login : Login = <Login> this.myForm.value;
   
   this.loginService.postLogin(login)
                    .subscribe(
                      (loginResponse : LoginResponse)=>{  this.message = JSON.stringify(loginResponse);     },
                      (error)=> { console.log(error); this.message ="erreur ..."}
                    );
                 
  }

  constructor(private _formBuilder: FormBuilder,
              private loginService : LoginService) { }

  ngOnInit(): void {
    this.myForm = this._formBuilder.group({
      username: ['admin1', [Validators.required , Validators.pattern('[a-zA-Z].*')]],
      password: ['pwdadmin1', [Validators.required, Validators.minLength(6)]],
      roles: ['admin', [Validators.required, ValidateRole] ]
      });
  }

}
