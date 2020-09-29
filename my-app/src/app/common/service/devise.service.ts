import { Injectable } from '@angular/core';
import { Devise } from '../data/devise';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

interface ResConv {
  source : string;
  target : string;
  amount : number;
  result: number;
}




@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  constructor(private http: HttpClient) { }

  // ancienne pré-version a (simulation , sans asynchrone):
  //pré-version b (simulation , avec asynchronisme et Observable)
  //réelle version c (appel de WS REST)
/*
  private listeDevises = [
    { code : "EUR" , name : "Euro" , change : 1.0 } ,
    { code : "USD" , name : "Dollar" , change : 1.1 } ,
    { code : "GBP" , name : "Livre" , change : 0.9 } ,
    { code : "JPY" , name : "Yen" , change : 120.0 } 
  ];
*/
  public getAllDevises() : Observable < Devise[] > {
       //return of(this.listeDevises);
      // let wsUrl = "http://localhost:8282/devise-api/public/devise";
      let wsUrl = "./devise-api/public/devise";
      //URL relative possible dès la phase de dev via ng serve --proxy-config proxy.conf.json
       return this.http.get<Devise[]>(wsUrl)
                       .pipe(
                          map( (tab) => tab.sort( (d1,d2) => (d1.change - d2.change) ) )
                       );
  }

  public convertir(montant : number, codeDevSource : string , codeDevCible : string) : Observable< number >{
    // return of(montant * 1.1234); //simulation rapide   
       /* let wsUrl = "http://localhost:8282/devise-api/public/convert?source="
                   +codeDevSource+"&target=" +codeDevCible + "&amount=" + montant ; */
     // let wsUrl = `http://localhost:8282/devise-api/public/convert?source=${codeDevSource}&target=${codeDevCible}&amount=${montant}` ;
      let wsUrl = `./devise-api/public/convert?source=${codeDevSource}&target=${codeDevCible}&amount=${montant}` ;
       //URL relative possible dès la phase de dev via ng serve --proxy-config proxy.conf.json
       return this.http.get<ResConv>(wsUrl)
                       .pipe(
                           map( (resConv : ResConv) => resConv.result )
                       );
  }
}
