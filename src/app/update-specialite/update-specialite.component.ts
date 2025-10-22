import { Component,EventEmitter,Input,OnInit, Output} from '@angular/core';
import { Specialite } from '../model/specialite.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-specialite',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './update-specialite.component.html',
  styles: ``
})
export class UpdateSpecialiteComponent implements OnInit{
@Input() 
specialite! : Specialite;

@Input() 
ajout!:boolean; 

@Output()  
specialiteUpdated = new EventEmitter<Specialite>(); 

  constructor(){

}


  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateSpecialite ",this.specialite);
}

saveSpecialite(){
   this.specialiteUpdated.emit(this.specialite);
}
}
