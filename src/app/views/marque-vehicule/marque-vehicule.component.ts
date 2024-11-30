import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-marque-vehicule',
  imports: [RouterModule, CommonModule],
  templateUrl: './marque-vehicule.component.html',
  styleUrl: './marque-vehicule.component.scss'
})
export class MarqueVehiculeComponent {
  showSearchBar: boolean = false;

  toggleSearchBar(): void {
    this.showSearchBar = !this.showSearchBar;
  }
}
