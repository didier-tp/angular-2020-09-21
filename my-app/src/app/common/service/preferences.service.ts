import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  private _couleurFondPreferee : string = "white"; //valeur par defaut

  public get couleurFondPreferee() { return this._couleurFondPreferee; }
  public set couleurFondPreferee(c) {
     this._couleurFondPreferee = c; 
      localStorage.setItem("couleurFondPreferee",this._couleurFondPreferee);
    }

  constructor() { 
    let c = localStorage.getItem("couleurFondPreferee");
    this._couleurFondPreferee = c?c:'white' ;
  }
}
