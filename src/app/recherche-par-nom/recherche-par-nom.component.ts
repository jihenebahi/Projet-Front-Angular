import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Medecin } from '../model/medecin.model';
import { MedecinService } from '../services/medecin.service';
//imports: [FormsModule, CommonModule,SearchFilterPipe], 
@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './recherche-par-nom.component.html',
  styles: ``
})
export class RechercheParNomComponent implements OnInit {
  nomMedecin! :string;
  medecins! :Medecin[];
  //allMedecins!: Medecin[];

  constructor(private medecinService : MedecinService){

  }
  ngOnInit(): void {
       //this.medecinService.listeMedecin().subscribe(meds => { 
      //console.log(meds); 
      //this.medecins = meds; 
      //}); 
      //this.allMedecins = meds;
      this.medecins=[];
  }
 
  recherchermeds() {
    if (this.nomMedecin)
      this.medecinService.rechercherParNom(this.nomMedecin).
        subscribe(meds => {
          console.log(meds);
          this.medecins = meds;
        });
    else
          this.medecinService.listeMedecin().subscribe(meds => { 
      console.log(meds); 
      this.medecins = meds; 
      }); 

  }

   
  //onKeyUp(filterText: string) {
  //this.medecins = this.allMedecins.filter(item =>
    //item.nomMed.toLowerCase().includes(filterText.toLowerCase())
  //);
//}

}
