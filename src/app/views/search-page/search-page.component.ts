import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search-page',
  imports: [RouterModule],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {

  zoomLevels: number[] = [1, 1.5, 2, 2.5];
  currentZoomIndex: number = 0;
  zoomStyle: string = 'scale(1)';
  zoomTransition: string = 'transform 0.3s ease';

  zoomIn() {
    this.currentZoomIndex = (this.currentZoomIndex + 1) % this.zoomLevels.length;
    const zoomLevel = this.zoomLevels[this.currentZoomIndex];
    this.zoomStyle = `scale(${zoomLevel})`;
  }
  zoomOut() {
    this.currentZoomIndex = (this.currentZoomIndex - 1 + this.zoomLevels.length) % this.zoomLevels.length;
    const zoomLevel = this.zoomLevels[this.currentZoomIndex];
    this.zoomStyle = `scale(${zoomLevel})`;
  }
}
