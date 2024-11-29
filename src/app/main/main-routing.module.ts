import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationProComponent } from "../views/authentification-pro/authentification-pro.component";
import { BoardPageComponent } from "../views/board-page/board-page.component";
import { ControleTechniqueComponent } from "../views/controle-technique/controle-technique.component";
import { CommandePieceComponent } from "../views/commande-piece/commande-piece.component";
import { EntretienComponent } from "../views/entretien/entretien.component";
import { InfoVehiculeComponent } from "../views/info-vehicule/info-vehicule.component";
import { DetailCarComponent } from "../views/detail-car/detail-car.component";
import { ListClientComponent } from "../views/list-client/list-client.component";
import { ListPieceComponent } from "../views/list-piece/list-piece.component";
import { ListVehiculeComponent } from "../views/list-vehicule/list-vehicule.component";
import { LoginPageComponent } from "../views/login-page/login-page.component";
import { MarqueDeVehiculeComponent } from "../views/marque-de-vehicule/marque-de-vehicule.component";
import { SearchPageComponent } from "../views/search-page/search-page.component";




const routes: Routes = [
  { path: "", component: SearchPageComponent },
  { path: "aboutus", component: ControleTechniqueComponent },
  { path: "contactus", component: BoardPageComponent },
  { path: "aboutus", component: CommandePieceComponent },
  { path: "contactus", component: EntretienComponent },
  { path: "aboutus", component: InfoVehiculeComponent },
  { path: "contactus", component: EntretienComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
