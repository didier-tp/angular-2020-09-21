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
     console.log("1/debut");
     deviseService.getAllDevises().subscribe(
         (devisesRecherchees : Devise[])=>{ console.log("3/recup res en différé");
                                            this.listeDevises =devisesRecherchees ; } ,
         (error)=>{  console.log(error); }
     );
     console.log("2/suite sans attendre");
   }

   onConversion(){
       this.deviseService.convertir(this.montant , this.codeDevSource , this.codeDevCible )
                         .subscribe(
                            (montantConv : number) => { this.montantConverti = montantConv ; } ,
                            (error)=>{  console.log(error); }
                         );
   }

  ngOnInit(): void {
  }

}
