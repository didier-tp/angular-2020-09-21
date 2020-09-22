import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
