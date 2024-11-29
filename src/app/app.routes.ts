import { Routes } from '@angular/router';
import { AuthentificationProComponent } from "./views/authentification-pro/authentification-pro.component";
import { BoardPageComponent } from "./views/board-page/board-page.component";
import { ControleTechniqueComponent } from "./views/controle-technique/controle-technique.component";
export const routes: Routes = [
  { path: '', component: AuthentificationProComponent},
  {
    path: 'bootstrap',
    loadChildren: () => import('./main/main.module')
      .then(mod => mod.MainModule)
  },
];
