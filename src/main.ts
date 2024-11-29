import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Routes, RouterModule } from '@angular/router';
import { MainModule } from "./app/main/main.module";
import { MainRoutingModule } from "./app/main/main-routing.module";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  imports: [BrowserModule, MainRoutingModule,MainModule,RouterModule],
  providers: [],
})
export class AppModule {}

