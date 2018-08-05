import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { switchMap, map } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import * as _ from 'lodash';
import { ICharacter } from './character';


@Injectable()
export class CharactersService {
  private nextPath: any;
  private charactersArray: any = [];

  constructor(private http: HttpClient) {}

  getCharacters(apiRequestPath: string): any {
    const params = new HttpParams().set('apiRequestPath', apiRequestPath);
    return this.http
      .get<ICharacter[]>('api/characters', { params: params })
      .pipe(
        map(res => {
          _.map(res['results'], (character: any) => {
            character['img_url'] = this.getImagePath(character);
            return character;
          });
          return res;
        }),
        // switchMap(res => {
        //   this.charactersArray = this.charactersArray.concat(res['results']);
        //   this.nextPath = res['next'];
        //   return this.nextPath ? this.getCharacters(this.nextPath) : Observable.of(this.charactersArray);
        // })
        map(res => {
          console.log('res', res);
          return res['results'];
        })
      );
  }

  getImagePath(character: any): any {
    const id = this.findIdFromUrl(character['url']);
    return '../assets/img/characters/' + id + '.jpg';
  }

  findIdFromUrl(url: string): any {
    const id: any = url.match(/([0-9])+/g);
    return id[0];
  }
}
