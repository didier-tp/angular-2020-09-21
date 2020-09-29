import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  private _couleurFondPreferee : string = "white"; //valeur par defaut

  private _bsCouleurFondPreferee : BehaviorSubject<string>; //initailisation dans constructeur

  //public get couleurFondPreferee() { return this._couleurFondPreferee; }
  public get couleurFondPrefereeObs() { return this._bsCouleurFondPreferee; }

  //public set couleurFondPreferee(c : string) {
  public setCouleurFondPreferee(c : string) {
     this._couleurFondPreferee = c; 
     this._bsCouleurFondPreferee.next(c); //NB: next(nouvelleValeur) declencle toutes les callbacks enregistrees via .subscribe()
                                          //sur ce meme behaviorSubject (cas particulier d'Observable)
     localStorage.setItem("couleurFondPreferee",this._couleurFondPreferee);
    }

  constructor() { 
    let c = localStorage.getItem("couleurFondPreferee");
    this._couleurFondPreferee = c?c:'white' ;
    this._bsCouleurFondPreferee  = new BehaviorSubject<string>(this._couleurFondPreferee);
  }
}
