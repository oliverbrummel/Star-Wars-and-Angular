import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films.service';

import { IFilm } from '../../interfaces/film';

@Component({
  selector: 'app-all-films',
  templateUrl: './all-films.component.html',
  styleUrls: ['./all-films.component.css']
})
export class AllFilmsComponent implements OnInit {
  listItems: IFilm[];

  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    this.filmsService.getFilms('https://swapi.co/api/films/?page=1')
      .subscribe(response => {
        sessionStorage.setItem('films', JSON.stringify(response));
        this.listItems = response;
      });
  }

}
