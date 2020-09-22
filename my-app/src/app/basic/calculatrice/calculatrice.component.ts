import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.scss']
})
export class CalculatriceComponent implements OnInit {

  x : number = 0;
  y : number =1;

  res : number;

  onAdditionner() :void{
    //this.res=this.x + this.y;
     this.res=Number(this.x)+Number(this.y);  //Number() avec un N majuscule est fonction prédéfinie de javascript
  }

  onMultiplier() :void{
    this.res=this.x * this.y;
 }

  constructor() { }

  ngOnInit(): void {
  }

}
