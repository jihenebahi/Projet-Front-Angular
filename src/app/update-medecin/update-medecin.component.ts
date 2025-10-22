import { Component, OnInit } from '@angular/core';
import { MedecinService } from '../services/medecin.service';
import { ActivatedRoute,Router } from '@angular/router'; 
import { Medecin } from '../model/medecin.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Specialite } from '../model/specialite.model';

@Component({
  selector: 'app-update-medecin',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './update-medecin.component.html',
  styles: ``
})
export class UpdateMedecinComponent implements OnInit {
  currentMedecin = new Medecin();

  specialites! : Specialite[]; 
  updatedSepId? : number; 
 
  constructor(private activatedRoute: ActivatedRoute, private router :Router, private medecinService: MedecinService){

 }
 
  ngOnInit(): void {

    this.medecinService.listeSpecialites(). 
    subscribe(seps => {this.specialites = seps._embedded.specialites; 
                       console.log(seps); 
   }); 
    this.medecinService.consulterMedecin(this.activatedRoute.snapshot.params['id']). 
    subscribe( med =>{ this.currentMedecin = med; 
       this.updatedSepId = this.currentMedecin.specialite?.idSep!;
    } ) ;

    
    //this.specialites = this.medecinService.listeSpecialite(); 
    //this.currentMedecin = this.medecinService.consulterMedecin(this.activatedRoute.snapshot.params['id']);
    //this.updatedSepId!= this.currentMedecin.specialite?.idSep; 
 }

 //updateMedecin(){
  //console.log(this.currentMedecin);
   //this.currentMedecin.specialite=this.medecinService.consulterSpecialite(this.updatedSepId);
  //this.medecinService.updateMedecin(this.currentMedecin);
  //this.router.navigate(['medecins']);
//}
updateMedecin() { 
this.currentMedecin.specialite= this.specialites. 
find(sep => sep.idSep== this.updatedSepId)!; 
this.medecinService.updateMedecin(this.currentMedecin).subscribe(med => { 
this.router.navigate(['medecins']); }  
); 
} 

}
