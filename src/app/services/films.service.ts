import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import * as _ from 'lodash';

import { ImageHelperService } from './image-helper.service';
import { IFilm } from '../interfaces/film';
import { Observable } from '../../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})

export class FilmsService {
  private nextPath: any;
  private filmsArray: any = [];

  constructor(
    private http: HttpClient,
    private imageHelperService: ImageHelperService
  ) {}

  getFilms(apiRequestPath: string): any {
    const cachedFilms = JSON.parse(sessionStorage.getItem('films'));
    if (cachedFilms) {
      return Observable.of(cachedFilms);
    }
    const params = new HttpParams().set('apiRequestPath', apiRequestPath);
    return this.http
      .get<IFilm[]>('api/films', {params: params })
      .pipe(
        map(res => {
          _.map(res['results'], (film: any) => {
            film['img_url'] = this.imageHelperService.getImagePath(film, 'films');
            return film;
          });
          return res;
        }),

        map(res => {
          console.log('film res', res);
          return res['results'];
        })
      );
  }
}
