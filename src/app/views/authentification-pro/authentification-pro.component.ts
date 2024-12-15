import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification-pro',
  imports: [],
  templateUrl: './authentification-pro.component.html',
  styleUrl: './authentification-pro.component.scss'
})
export class AuthentificationProComponent {
 
  constructor( private router: Router) {}

  auth() {
    this.router.navigate(['/navbar/marque-vehicule']);
  }
}
