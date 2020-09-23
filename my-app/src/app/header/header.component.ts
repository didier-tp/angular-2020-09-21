import { Component, OnInit, Input } from '@angular/core';
import { PreferencesService } from '../common/service/preferences.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  titre : string ="default title";

  constructor(public preferencesService : PreferencesService) { }

  ngOnInit(): void {
  }

}
