import { Injectable } from '@angular/core';
import { Devise } from '../data/devise';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  constructor() { }

  // ancienne pré-version a (simulation , sans asynchrone):
  //pré-version b (simulation , avec asynchronisme et Observable)

  private listeDevises = [
    { code : "EUR" , name : "Euro" , change : 1.0 } ,
    { code : "USD" , name : "Dollar" , change : 1.1 } ,
    { code : "GBP" , name : "Livre" , change : 0.9 } ,
    { code : "JPY" , name : "Yen" , change : 120.0 } 
  ];

  public getAllDevises() : Observable < Devise[] > {
       return of(this.listeDevises);
  }

  public convertir(montant : number, codeDevSource : string , codeDevCible : string) : Observable< number >{
        return of(montant * 1.1234); //simulation rapide
  }
}
