import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';
import { Observable } from 'rxjs/Observable';
import { tap, map, catchError } from 'rxjs/operators';

import { ICharacter } from '../character';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  searchResults: ICharacter[];

  constructor(private starwarsService: StarwarsService) { }

  ngOnInit() {
    this.starwarsService.cast.subscribe(data => this.searchResults = data);
  }

}
