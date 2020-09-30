import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.scss']
})
export class CalculatriceComponent implements OnInit {
/*
  dataCalcul = {
    x : 0 ,
    y : 0 ,
    res : 0
  };
*/
  modeChoisi : string = "simple"; //ou "sophistiquee";
  x : number = 0;
  y : number =1;

  res : number;


  onAdditionner() :void{
    //this.res=this.x + this.y;
     this.res=Number(this.x)+Number(this.y);  //Number() avec un N majuscule est fonction prédéfinie de javascript
    //this.dataCalcul.res = Number(this.dataCalcul.x) + Number(this.dataCalcul.y);
  }

  onMultiplier() :void{
    this.res=this.x * this.y;
   //this.dataCalcul.res = this.dataCalcul.x * this.dataCalcul.y;
 }

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe(
      (params: Params) => {
      this.modeChoisi= params['mode']; //où 'mode' est le nom du paramètre
      // dans l'expression de la route
      // (fichier app-routing.module.js ; { path: 'calculatrice/:mode', component: CalculatriceComponent },)
      }
      );
  }

}
