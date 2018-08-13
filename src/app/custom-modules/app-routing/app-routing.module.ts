import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllCharactersComponent } from '../../characters/all-characters/all-characters.component';
import { AllFilmsComponent } from '../../films/all-films/all-films.component';
import { AllPlanetsComponent } from '../../planets/all-planets/all-planets.component';
import { AllSpeciesComponent } from '../../species/all-species/all-species.component';
import { AllStarshipsComponent } from '../../starships/all-starships/all-starships.component';
import { AllVehiclesComponent } from '../../vehicles/all-vehicles/all-vehicles.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'characters' },
  { path: 'films', component: AllFilmsComponent },
  { path: 'characters', component: AllCharactersComponent },
  { path: 'planets', component: AllPlanetsComponent },
  { path: 'species', component: AllSpeciesComponent },
  { path: 'starships', component: AllStarshipsComponent },
  { path: 'vehicles', component: AllVehiclesComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
