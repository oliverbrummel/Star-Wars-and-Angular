import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../characters.service';

import { ICharacter } from '../../character';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  listItems: ICharacter[];

  constructor(private starwarsService: CharactersService) { }

  testClick(character: object): any {
    console.log('character', character);
    this.findIdFromUrl(character['url']);
  }

  findIdFromUrl(url: string): any {
    const id: any = url.match(/([0-9])+/g);
    return id[0];
  }

  ngOnInit() {
    this.starwarsService.getCharacters('https://swapi.co/api/people/?page=1')
    .subscribe(response => this.listItems = response);
  }

}
