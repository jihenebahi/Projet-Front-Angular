import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'MesMedecins';
  constructor(public authService: AuthService,private router :Router){

  }


  onLogout(){ 
  this.authService.logout(); 
  } 

  ngOnInit () { 
  let isloggedin: string; 
  let loggedUser:string; 
  isloggedin = localStorage.getItem('isloggedIn') !; 
  loggedUser = localStorage.getItem('loggedUser') !; 
  if (isloggedin!="true" || !loggedUser) 
      this.router.navigate(['/login']); 
  else 
   this.authService.setLoggedUserFromLocalStorage(loggedUser); 
} 
}
