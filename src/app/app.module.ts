import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { FilmsService } from './services/films.service';
import { CharactersService } from './services/characters.service';
import { SpeciesService } from './services/species.service';
import { PlanetsService } from './services/planets.service';
import { StarshipsService } from './services/starships.service';
import { VehiclesService } from './services/vehicles.service';
import { MyAngularMaterialModule } from './custom-modules/my-angular-material/my-angular-material.module';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllCharactersComponent } from './characters/all-characters/all-characters.component';
import { AllFilmsComponent } from './films/all-films/all-films.component';
import { AllPlanetsComponent } from './planets/all-planets/all-planets.component';
import { AllSpeciesComponent } from './species/all-species/all-species.component';
import { AllStarshipsComponent } from './starships/all-starships/all-starships.component';
import { AllVehiclesComponent } from './vehicles/all-vehicles/all-vehicles.component';
import { AppRoutingModule } from './custom-modules/app-routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    MainContentComponent,
    FooterComponent,
    AllCharactersComponent,
    AllFilmsComponent,
    AllPlanetsComponent,
    AllSpeciesComponent,
    AllStarshipsComponent,
    AllVehiclesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MyAngularMaterialModule
  ],
  providers: [
    CharactersService,
    FilmsService,
    SpeciesService,
    PlanetsService,
    StarshipsService,
    VehiclesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
