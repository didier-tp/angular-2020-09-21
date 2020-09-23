import { Component, OnInit } from '@angular/core';
import { DeviseService } from '../common/service/devise.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {

  constructor(private deviseService : DeviseService) { }

  ngOnInit(): void {
  }

}
