import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search-page',
  imports: [RouterModule, CommonModule],
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {
  table: boolean = true;
  zoomLevels: number[] = [1, 1.5, 2, 2.5];
  currentZoomIndex: number = 0;
  zoomStyle: string = 'scale(1)';
  zoomTransition: string = 'transform 0.3s ease';
  
  
  offsetX: number = 0;
  offsetY: number = 0;
  startX: number = 0;
  startY: number = 0;
  isDragging: boolean = false;
  isMoving: boolean = false; 

  // Fonction pour zoomer
  zoomIn() {
    this.currentZoomIndex = (this.currentZoomIndex + 1) % this.zoomLevels.length;
    const zoomLevel = this.zoomLevels[this.currentZoomIndex];
    this.zoomStyle = `scale(${zoomLevel})`;
  }

  // Fonction pour dézoomer
  zoomOut() {
    this.currentZoomIndex = (this.currentZoomIndex - 1 + this.zoomLevels.length) % this.zoomLevels.length;
    const zoomLevel = this.zoomLevels[this.currentZoomIndex];
    this.zoomStyle = `scale(${zoomLevel})`;
  }

  visible() {
    
    this.table = !this.table;
  }


  enableMove() {
    this.isMoving = true;
  }

  
  disableMove() {
    this.isMoving = false;
  }


  onMouseDown(event: MouseEvent): void {
    if (!this.isMoving) return; 
    event.preventDefault();
    this.isDragging = true;
    this.startX = event.clientX - this.offsetX;
    this.startY = event.clientY - this.offsetY;
  }

  onMouseMove(event: MouseEvent): void {
    if (!this.isDragging || !this.isMoving) return; 
    this.offsetX = event.clientX - this.startX;
    this.offsetY = event.clientY - this.startY;
  }

  
  onMouseUp(): void {
    this.isDragging = false;
  }

  
  onMouseLeave(): void {
    this.isDragging = false;
  }
}
