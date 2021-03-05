import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddEmploiComponent } from './add-emploi/add-emploi.component';
import { AddOffreEmploiComponent } from './add-offre-emploi/add-offre-emploi.component';
import { HeaderEmployeurComponent } from './header-employeur/header-employeur.component';
import { EspaceEmployeurComponent } from './espace-employeur/espace-employeur.component';
import { ListEmploiComponent } from './list-emploi/list-emploi.component';
import { AddCompteComponent } from './add-compte/add-compte.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    AddEmploiComponent,
    AddOffreEmploiComponent,
    HeaderEmployeurComponent,
    EspaceEmployeurComponent,
    ListEmploiComponent,
    AddCompteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
