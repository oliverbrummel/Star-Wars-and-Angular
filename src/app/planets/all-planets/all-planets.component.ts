import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../../services/planets.service';

import { IPlanet } from '../../interfaces/planet';

@Component({
  selector: 'app-all-planets',
  templateUrl: './all-planets.component.html',
  styleUrls: ['./all-planets.component.css']
})
export class AllPlanetsComponent implements OnInit {
  listItems: IPlanet[];

  constructor(private planetsService: PlanetsService) {}

  ngOnInit() {
    this.planetsService
      .getPlanets('https://swapi.co/api/planets/?page=1')
      .subscribe(response => (this.listItems = response));
  }
}
