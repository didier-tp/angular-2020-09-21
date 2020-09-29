import { Component, OnInit } from '@angular/core';
import { PreferencesService } from '../common/service/preferences.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  backColor : string = "white";

  public listeCouleurs : string[] = [ "white" , "yellow" , "grey" , "red" , "blue" , "green"];

  constructor(private preferencesServices : PreferencesService ) {
    preferencesServices.couleurFondPrefereeObs.subscribe((c)=>this.backColor=c);
   }

  onChange(){
    this.preferencesServices.setCouleurFondPreferee(this.backColor);
  }

  ngOnInit(): void {
  }

}
