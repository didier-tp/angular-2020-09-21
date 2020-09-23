import { Component, OnInit } from '@angular/core';
import { DeviseService } from '../common/service/devise.service';
import { Devise } from '../common/data/devise';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {

  montant : number = 100;
  codeDevSource : string = "EUR";
  codeDevCible : string = "USD";
  montantConverti : number ;

  listeDevises : Devise[]; 

  constructor(private deviseService : DeviseService) {
      this.listeDevises = deviseService.getAllDevises();
   }

   onConversion(){
     this.montantConverti =   this.deviseService.convertir(this.montant , this.codeDevSource , this.codeDevCible );
   }

  ngOnInit(): void {
  }

}
