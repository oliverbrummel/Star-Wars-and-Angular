import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../starwars.service';

import { ICharacter } from '../../character';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  listItems: ICharacter[];

  constructor(private starwarsService: StarwarsService) { }

  ngOnInit() {
    this.starwarsService.getCharacters('https://swapi.co/api/people/?page=1')
    .subscribe(response => this.listItems = response);
  }

}
