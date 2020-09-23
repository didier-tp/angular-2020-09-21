import { Component, OnInit } from '@angular/core';
import { PreferencesService } from '../common/service/preferences.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public listeCouleurs : string[] = [ "white" , "yellow" , "grey" , "red" , "blue" , "green"];

  constructor(public preferencesServices : PreferencesService ) { }

  ngOnInit(): void {
  }

}
