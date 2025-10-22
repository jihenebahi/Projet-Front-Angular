import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Medecin } from '../model/medecin.model';
import { MedecinService } from '../services/medecin.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-medecins',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './medecins.component.html',
  
})
export class MedecinsComponent implements OnInit{
  //medecins : string[];
  medecins! : Medecin[];

  constructor(private medecinService :MedecinService) { 
    //this.medecins=medecinService.listMedecin();
  }
  
  //supprimerMedecin(med : Medecin){
    //console.log(med);
   // let conf = confirm("Etes-vous sûr ?");
  // if (conf){
   // this.medecinService.supprimerMedecin(med);
   //}
    
  //}

  ngOnInit(): void {

     this.chargerMedecins();
      
  }
   
  chargerMedecins(){
    this.medecinService.listeMedecin().subscribe(meds => { 
      console.log(meds); 
      this.medecins = meds; 
    }); 
  }

   supprimerMedecin(m: Medecin) 
    { 
      let conf = confirm("Etes-vous sûr ?"); 
      if (conf) 
      this.medecinService.supprimerMedecin(m.idMedecin).subscribe(() => { 
        console.log("medecin supprimé"); 
        this.chargerMedecins(); 
           }); 
    }  

}
