import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {AddEmploiComponent} from './add-emploi/add-emploi.component';
import {AddOffreEmploiComponent} from './add-offre-emploi/add-offre-emploi.component';
import {EspaceEmployeurComponent} from './espace-employeur/espace-employeur.component';
import {AddCompteComponent} from './add-compte/add-compte.component';


const routes: Routes = [
  { path: 'accueil', component: AccueilComponent},
  { path: 'loginEmployeur', component: AddEmploiComponent},
  { path: 'EspaceEmployeur', component: EspaceEmployeurComponent},
  { path: 'addOffreEmploi', component: AddOffreEmploiComponent},
  { path: 'addCompte', component: AddCompteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
