import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { switchMap} from 'rxjs/operators';
import 'rxjs/add/observable/of';

import { ICharacter } from './character';


@Injectable()
export class StarwarsService {
  private nextPath: any;
  private charactersArray: any = [];

  constructor(private http: HttpClient) {}

  getCharacters(apiRequestPath: string): any {
    const params = new HttpParams().set('apiRequestPath', apiRequestPath);
    return this.http
      .get<ICharacter[]>('api/characters', { params: params })
      .pipe(
        switchMap(res => {
          this.charactersArray = this.charactersArray.concat(res['results']);
          this.nextPath = res['next'];
          return this.nextPath ? this.getCharacters(this.nextPath) : Observable.of(this.charactersArray);
        })
      );
  }
}
