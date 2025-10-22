import { Specialite } from "./specialite.model";

export class Medecin {
idMedecin! : number;
nomMedecin! : string;
tarifConsultation! : number;
dateDiplome! : Date ;
specialite? : Specialite;
}