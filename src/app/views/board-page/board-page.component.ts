import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-page',
  imports: [],
  templateUrl: './board-page.component.html',
  styleUrl: './board-page.component.scss'
})
export class BoardPageComponent {

  constructor( private router: Router) {}

  navigate() {
    this.router.navigate(['/navbar/search']);
  }
}
