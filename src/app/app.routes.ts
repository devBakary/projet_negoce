import { Routes } from '@angular/router';
import { HeaderNavComponent } from './views/navbars/header-nav/header-nav.component';
import { SearchPageComponent } from './views/search-page/search-page.component';
import { SubHeaderNavComponent } from './views/navbars/sub-header-nav/sub-header-nav.component';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { AuthentificationProComponent } from './views/authentification-pro/authentification-pro.component';
import { BoardPageComponent } from './views/board-page/board-page.component';
import { MarqueVehiculeComponent } from './views/marque-vehicule/marque-vehicule.component';
import { ListPieceComponent } from './views/list-piece/list-piece.component';
import { ListClientComponent } from './views/list-client/list-client.component';
import { EntretienComponent } from './views/entretien/entretien.component';
import { PrendreRdvComponent } from './views/prendre-rdv/prendre-rdv.component';
import { CommandePieceComponent } from './views/commande-piece/commande-piece.component';
import { PieceDefectueuseComponent } from './views/piece-defectueuse/piece-defectueuse.component';
import { InfoVehiculeComponent } from './views/info-vehicule/info-vehicule.component';
import { ControleTechniqueComponent } from './views/controle-technique/controle-technique.component';
import { RdvInfoGarageComponent } from './views/rdv-info-garage/rdv-info-garage.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo:"/login",
        pathMatch: 'full'
    },
    {
        path: "login",
        component: LoginPageComponent
    },
    {
        path: "authentification",
        component: AuthentificationProComponent
    },
    {
        path: "navbar",
        component: HeaderNavComponent,
        children: [
              {
                path: "search",
                component: SearchPageComponent
              },
              {
                path: "dashboard",
                component: BoardPageComponent
              },
              {
                path: "marque-vehicule",
                component: MarqueVehiculeComponent
              },
              {
                path: "list-piece",
                component: ListPieceComponent
              },
              {
                path: "sub-nav",
                component: SubHeaderNavComponent,
                children: [
                    {
                        path: "list-client",
                        component: ListClientComponent
                    },
                    {
                        path: "entretien",
                        component: EntretienComponent
                    },
                    {
                        path: "prendre-rdv",
                        component: PrendreRdvComponent
                    },
                    {
                        path: "prendre-rdv-garage",
                        component: RdvInfoGarageComponent
                    },
                    {
                        path: "commande-piece",
                        component: CommandePieceComponent
                    },
                    {
                        path: "piece-defectueuse",
                        component: PieceDefectueuseComponent
                    },
                    {
                        path: "info-vehicule",
                        component: InfoVehiculeComponent
                    },
                    {
                        path: "controle-technique",
                        component: ControleTechniqueComponent
                    }
                ]
            }
            ],
    },
];
