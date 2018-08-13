import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

import { ICharacter } from '../../interfaces/character';

@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.css']
})
export class AllCharactersComponent implements OnInit {
  listItems: ICharacter[];


  constructor(
    private charactersService: CharactersService,
  ) { }

  testClick(character: object): any {
    console.log('character', character);
  }

  ngOnInit() {
    this.charactersService.getCharacters('https://swapi.co/api/people/?page=1')
    .subscribe(response => {
      sessionStorage.setItem('characters', JSON.stringify(response));
      this.listItems = response;
    });
  }

}
