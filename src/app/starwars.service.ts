import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap, map } from 'rxjs/operators';

import { ICharacter } from './character';


@Injectable()
export class StarwarsService {
  characters: Observable<ICharacter[]>;
  private baseUrl = 'api/characters';
  constructor(private http: HttpClient) {}

  getCharacters(searchString: string): any {
    const params = new HttpParams().set('nameStartsWith', searchString);
    this.http
      .get<ICharacter[]>(this.baseUrl, { params: params })
      .pipe(
        map(res => {
          return res['results'];
        }),
        tap(res => console.log('service response', res)))
      .subscribe(characters => (this.characters = characters));
  }
}
