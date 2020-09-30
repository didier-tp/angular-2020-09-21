import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  selectedSubRoute : string ="tva"; //par defaut
  subRoutes = [ "tva" , "calculatrice/simple" , "calculatrice/sophistiquee" ];

  constructor() { }

  ngOnInit(): void {
  }

}
