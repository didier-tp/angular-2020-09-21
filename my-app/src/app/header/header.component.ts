import { Component, OnInit, Input } from '@angular/core';
import { PreferencesService } from '../common/service/preferences.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  couleurFond : string = "white";
  couleurText : string = "black";

  @Input()
  titre : string ="default title";

  ajustTextColorIfNecessary(){
    switch(this.couleurFond){
      case  "blue":
      case  "green" :
      case  "grey" :
            this.couleurText="white";
            break;
      default:
        this.couleurText="black";
    }
  }

  constructor(public preferencesService : PreferencesService) {
    preferencesService.couleurFondPrefereeObs.subscribe(
      (c)=> { this.couleurFond=c; this.ajustTextColorIfNecessary() }
      );
   }

  ngOnInit(): void {
  }

}
