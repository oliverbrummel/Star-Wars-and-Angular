import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { switchMap, map } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import * as _ from 'lodash';

import { ImageHelperService } from './image-helper.service';
import { ICharacter } from '../interfaces/character';


@Injectable()
export class CharactersService {
  private nextPath: any;
  private charactersArray: any = [];

  constructor(
    private http: HttpClient,
    private imageHelperService: ImageHelperService
  ) {}

  getCharacters(apiRequestPath: string): any {
    const cachedCharacters = JSON.parse(sessionStorage.getItem('characters'));
    if (cachedCharacters) {
      return Observable.of(cachedCharacters);
    }
    const params = new HttpParams().set('apiRequestPath', apiRequestPath);
    return this.http
      .get<ICharacter[]>('api/characters', { params: params })
      .pipe(
        map(res => {
          _.map(res['results'], (character: any) => {
            character['img_url'] = this.imageHelperService.getImagePath(character, 'characters');
            return character;
          });
          return res;
        }),
        switchMap(res => {
          this.charactersArray = this.charactersArray.concat(res['results']);
          this.nextPath = res['next'];
          return this.nextPath ? this.getCharacters(this.nextPath) : Observable.of(this.charactersArray);
        })
      );
  }
}
