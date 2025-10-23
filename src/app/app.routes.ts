import { Routes } from '@angular/router';
import { MedecinsComponent } from './medecins/medecins.component';
import { AddMedecinComponent } from './add-medecin/add-medecin.component';
import { UpdateMedecinComponent } from './update-medecin/update-medecin.component';
import { RechercheParSpecialiteComponent } from './recherche-par-specialite/recherche-par-specialite.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeSpecialitesComponent } from './liste-specialites/liste-specialites.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { medecinGuard } from './medecin.guard';

export const routes: Routes = [
    {path: "medecins", component : MedecinsComponent},
    {path: "add-medecin", component : AddMedecinComponent, canActivate:[medecinGuard]},
    {path: "updateMedecin/:id",  component: UpdateMedecinComponent},
    {path: "rechercheParSpecialite", component : RechercheParSpecialiteComponent},
     {path: "rechercheParNom", component : RechercheParNomComponent},
     {path: "listeSpecialites", component : ListeSpecialitesComponent},
     {path:  'login', component: LoginComponent},
      {path:  'app-forbidden', component: ForbiddenComponent},     
    {path: "", redirectTo: "medecins", pathMatch: "full"}   

];
