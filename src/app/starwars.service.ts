import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ICharacter } from './character';


@Injectable()
export class StarwarsService {
  private characters = new BehaviorSubject<ICharacter[]>([]);
  cast = this.characters.asObservable();

  private nextPage: any;

  constructor(private http: HttpClient) {}

  getCharacters(searchString: string): any {
    const params = new HttpParams().set('nameStartsWith', searchString);
    this.http
      .get<ICharacter[]>('api/characters', { params: params })
      .pipe(
        map(res => {
          this.nextPage = res['next'];
          console.log('Rezzy', res);
          return res['results'];
        }),
        tap(res => console.log('service response', res)))
      .subscribe(characters => this.characters.next(characters));
  }
}
