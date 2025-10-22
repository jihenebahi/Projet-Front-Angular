import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Medecin } from '../model/medecin.model';
import { MedecinService } from '../services/medecin.service';
import { Specialite } from '../model/specialite.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-medecin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-medecin.component.html',
 
})
export class AddMedecinComponent implements OnInit {
  
  newMedecin = new Medecin();
  


  message :string ='';

  specialites! : Specialite[];
  newSpecialite! :Specialite;
  newIdSep! : number; 
  constructor(private medecinService: MedecinService,private router :Router){

  }
  ngOnInit(): void {
     //this.specialites=this.medecinService.listeSpecialite(); 
     this.medecinService.listeSpecialites(). 
    subscribe(seps => {this.specialites = seps._embedded.specialites; 
                      console.log(seps)});
  }
   
  //addMedecin(){
    // console.log(this.newMedecin);
    //this.newSpecialite = this.medecinService.consulterSpecialite(this.newIdSep); 
    //this.newMedecin.specialite = this.newSpecialite; 
    //this.medecinService.ajouterMedecin(this.newMedecin);
    //this.router.navigate(['medecins']); 
    //this.message= "Medecin "+ this.newMedecin.nomMedecin + " ajouter avec succés!";


    addMedecin(){ 
    this.newMedecin.specialite = this.specialites.find(sep => sep.idSep == this.newIdSep)!;
    this.medecinService.ajouterMedecin(this.newMedecin) .subscribe(med => { console.log(med); 
    this.router.navigate(['medecins']); 
      });  
  }


}

  
  


