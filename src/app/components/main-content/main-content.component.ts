import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films.service';
import { CharactersService } from '../../services/characters.service';
import { PlanetsService } from '../../services/planets.service';
import { SpeciesService } from '../../services/species.service';
import { StarshipsService } from '../../services/starships.service';
import { VehiclesService } from '../../services/vehicles.service';

import { IFilm } from '../../interfaces/film';
import { ICharacter } from '../../interfaces/character';
import { IPlanet } from '../../interfaces/planet';
import { ISpecies } from '../../interfaces/species';
import { IStarship } from '../../interfaces/starship';
import { IVehicle } from '../../interfaces/vehicle';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  listItems: ICharacter[];

  constructor(
    private filmsService: FilmsService,
    private starwarsService: CharactersService,
    private planetsService: PlanetsService,
    private speciesService: SpeciesService,
    private starshipsService: StarshipsService,
    private vehiclesService: VehiclesService,
  ) { }

  testClick(character: object): any {
    console.log('character', character);
  }

  ngOnInit() {
    this.filmsService.getFilms('https://swapi.co/api/films/?page=1')
    .subscribe(response => this.listItems = response);
    // this.starwarsService.getCharacters('https://swapi.co/api/people/?page=1')
    // .subscribe(response => this.listItems = response);
  }

}
