import { Component, OnInit } from '@angular/core';
import { MedecinService } from '../services/medecin.service';
import { Specialite } from '../model/specialite.model';
import { UpdateSpecialiteComponent } from '../update-specialite/update-specialite.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste-specialites',
  standalone: true,
  imports: [UpdateSpecialiteComponent,CommonModule],
  templateUrl: './liste-specialites.component.html',
  styles: ``
})
export class ListeSpecialitesComponent implements OnInit {

  specialites! :Specialite[];


  //updatedSep:Specialite = {"idSep":null,"nomSep":""}; 
  updatedSep: Specialite = { idSep: null, nomSep: "" }; // OK si idSep est number | null

  ajout :boolean=true;


  constructor(private medecinService :MedecinService){

  }
  
  
  
  ngOnInit(): void {
   this.chargerSpecialites();
  }

  chargerSpecialites(){
       this.medecinService.listeSpecialites().
      subscribe(seps => {
        this.specialites = seps._embedded.specialites;
        console.log(seps);
      });
  }

  specialite(sep : Specialite){
   console.log("specialite recu", sep);
   this.medecinService.ajouterSpecialite(sep). 
   subscribe( ()=>  this.chargerSpecialites());
  }

  //updateSep(sep: Specialite){
    // this.updateSep =sep;
    
 // }

 updateSep(sep: Specialite){
   this.updatedSep = sep;  // méthode
   this.ajout=false;
}
}
