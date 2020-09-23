import { Injectable } from '@angular/core';
import { Devise } from '../data/devise';

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  constructor() { }

  //pré-version a (simulation , sans asynchrone):

  private listeDevises = [
    { code : "EUR" , name : "Euro" , change : 1.0 } ,
    { code : "USD" , name : "Dollar" , change : 1.1 } ,
    { code : "GBP" , name : "Livre" , change : 0.9 } ,
    { code : "JPY" , name : "Yen" , change : 120.0 } 
  ];

  public getAllDevises() : Devise[] {
       return this.listeDevises;
  }

  public convertir(montant : number, codeDevSource : string , codeDevCible : string) : number{
        return montant * 1.1234; //simulation rapide
  }
}
