import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  public couleurFondPreferee : string = "white"; //valeur par defaut

  constructor() { }
}
