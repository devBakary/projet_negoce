import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commande-piece',
  imports: [],
  templateUrl: './commande-piece.component.html',
  styleUrl: './commande-piece.component.scss'
})
export class CommandePieceComponent {

  constructor( private router: Router) {}

  navigate() {
    this.router.navigate(['/navbar/search']);
  }

}
