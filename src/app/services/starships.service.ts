import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { switchMap, map } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import * as _ from 'lodash';

import { ImageHelperService } from './image-helper.service';
import { IStarship } from '../interfaces/starship';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {
  private nextPath: any;
  private starshipsArray: any = [];

  constructor(
    private http: HttpClient,
    private imageHelperService: ImageHelperService
  ) {}

  getStarships(apiRequestPath: string): any {
    const params = new HttpParams().set('apiRequestPath', apiRequestPath);
    return this.http
      .get<IStarship[]>('api/starships', { params: params })
      .pipe(
        map(res => {
          _.map(res['results'], (starship: any) => {
            starship['img_url'] = this.imageHelperService.getImagePath(starship, 'starships');
            return starship;
          });
          return res;
        }),
        // switchMap(res => {
        //   this.starshipsArray = this.starshipsArray.concat(res['results']);
        //   this.nextPath = res['next'];
        //   return this.nextPath ? this.getStarships(this.nextPath) : Observable.of(this.starshipsArray);
        // })
        map(res => {
          console.log('res', res);
          return res['results'];
        })
      );
  }
}
