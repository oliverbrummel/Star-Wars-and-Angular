import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StarwarsService } from '../starwars.service';
import { ICharacter } from '../character';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private starwarsService: StarwarsService
  ) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      searchString: ''
    });
  }

  onSubmit(): any {
    const searchString = this.searchForm.value['searchString'];
    console.log('searchString', searchString);

    this.starwarsService.getCharacters(searchString);
  }

}
