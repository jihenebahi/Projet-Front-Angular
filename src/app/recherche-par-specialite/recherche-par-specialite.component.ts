import { Component, OnInit } from '@angular/core';
import { Medecin } from '../model/medecin.model';
import { Specialite } from '../model/specialite.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MedecinService } from '../services/medecin.service';

@Component({
  selector: 'app-recherche-par-specialite',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './recherche-par-specialite.component.html',
  styles: ``
})
export class RechercheParSpecialiteComponent implements OnInit {
 
  medecins! : Medecin[];
  IdSpecialite! : number; 
  specialites! : Specialite[];

  constructor(private medecinService : MedecinService){

  }
  ngOnInit(): void {
      
     this.medecinService.listeSpecialites(). subscribe(seps => {this.specialites = seps._embedded.specialites; 
      console.log(seps); 
  });
  }
  onChange()
  {
     this.medecinService.rechercherParSpecialite(this.IdSpecialite). 
      subscribe(meds =>{
        console.log('meds reçus:', meds);
        this.medecins=meds}); 

  }
}
