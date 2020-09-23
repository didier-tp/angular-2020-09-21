import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../data/login';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { LoginResponse } from '../data/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  private _headers = new HttpHeaders({'Content-Type': 'application/json'});

  public postLogin(login: Login): Observable<LoginResponse>{
       let wsUrl ="http://localhost:8282/login-api/public/auth";
       return this.http.post<LoginResponse>(wsUrl,login, { headers : this._headers})
                   .pipe(
                     tap( (loginResponse : LoginResponse)=> { localStorage.setItem('token',loginResponse.token) })
                   );
  }
}
