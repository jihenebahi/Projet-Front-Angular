import { Injectable } from '@angular/core';
import { Medecin } from '../model/medecin.model';
import { Specialite } from '../model/specialite.model';
import { Observable } from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SpecialiteWrapper } from '../model/SpecialiteWrapped.model';
import { map } from 'rxjs/operators';
//import { environment } from '../../environments/environment';

const httpOptions = { 
headers: new HttpHeaders( {'Content-Type': 'application/json'} ) 
};


@Injectable({
  providedIn: 'root'
})
export class MedecinService {
  
  apiURL: string ='http://localhost:8080/medecins/api'
  //apiURL: string = 'http://localhost:8080/medecins/sep'; 
  apiURLSep: string = 'http://localhost:8080/medecins/sep'; 

  medecins! : Medecin[];
  //specialite :Specialite[];

  constructor(private http : HttpClient) { 

    //this.specialite=[
    //{idSep : 1, nomSep : "generaliste"},
    //{idSep : 2, nomSep : "pediatre"}  
    //];
    /*this.medecins = [
      {idMedecin : 1, nomMedecin : "Sami ben salah", tarifConsultation : 70.00, dateDiplome : new Date("01/14/2011"),specialite:{idSep : 1, nomSep : "generaliste"}, },
      {idMedecin : 2, nomMedecin : "Bechir", tarifConsultation : 80.00, dateDiplome : new Date("12/17/2010"),specialite:{idSep : 1, nomSep : "generaliste"}, },
      {idMedecin : 3, nomMedecin :"leila", tarifConsultation : 50.0, dateDiplome : new Date("02/20/2020"),specialite:{idSep : 2, nomSep : "pediatre"} }
    ] */
   }


   /*listMedecin():Medecin[]{
    return this.medecins;
   }*/ 

   listeMedecin(): Observable<Medecin[]>{ 
    return this.http.get<Medecin[]>(this.apiURL); //this.apiURL twali apiURL kif tamil el import mta el config
    // kif testamil el environement twali environment.apiURL
  } 

  ajouterMedecin( med: Medecin):Observable<Medecin>{ 
      return this.http.post<Medecin>(this.apiURL, med, httpOptions); 
    } 
   
   /*ajouterMedecin(medecin : Medecin){
       this.medecins.push(medecin);
   }*/

   /*supprimerMedecin( med: Medecin){
      //supprimer le medecin med du tableau medecins
      const index = this.medecins.indexOf(med, 0);
      if (index > -1) {
          this.medecins.splice(index, 1);
      }
    //ou Bien
    /* this.medecins.forEach((cur, index) => {
    if(med.idMedecin === cur.idMedecin) {
    this.medecins.splice(index, 1);
    }
  }); */
supprimerMedecin(id : number) { 
     const url = `${this.apiURL}/${id}`; 
      return this.http.delete(url, httpOptions); 
          } 

//consulterMedecin(id:number): Medecin{     
  //return   this.medecins.find(m => m.idMedecin == id)!; 
  
//}

consulterMedecin(id: number): Observable<Medecin> { 
const url = `${this.apiURL}/${id}`; 
return this.http.get<Medecin>(url); 
} 

//updateMedecin( med: Medecin){ 
  //chercher le medecin med du tableau medecins 
 //const index = this.medecins.indexOf(med, 0); 
    //if (index > -1) { 
     //this.medecins.splice(index, 1); //supprimer l'ancien éléments 
      //this.medecins.splice(index,0,med); // insérer le nouvel élément 
         //  } 
//}

updateMedecin(med :Medecin) : Observable<Medecin> 
{   
return this.http.put<Medecin>(this.apiURL, med, httpOptions); 
} 

//Methode pour specialite
//listeSpecialite():Specialite[] { 
      //return this.specialite; 
//}

 //listeSpecialites():Observable<Specialite[]>{ 
           // return this.http.get<Specialite[]>(this.apiURL+"/sep"); 
          //}

listeSpecialites():Observable<SpecialiteWrapper>{ 
              return this.http.get<SpecialiteWrapper>(this.apiURLSep); 
           } 
 
//consulterSpecialite(id:number): Specialite{     
         // return this.specialite.find(sep => sep.idSep  == id)!; 
 
//} 

rechercherParSpecialite(idSep: number):Observable< Medecin[]> { 
               const url = `${this.apiURL}/medssep/${idSep}`;  // <-- l'URL qui correspond à ton backend
             return this.http.get<Medecin[]>(url);

}

 rechercherParNom(nom: string):Observable< Medecin[]> { 
            const url = `${this.apiURL}/medsByName/${nom}`; 
              return this.http.get<Medecin[]>(url); 
           } 

ajouterSpecialite( sep: Specialite):Observable<Specialite>{ 
return this.http.post<Specialite>(this.apiURLSep, sep, httpOptions); 
} 
}
