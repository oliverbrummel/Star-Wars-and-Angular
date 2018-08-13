import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { switchMap, map } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import * as _ from 'lodash';

import { ImageHelperService } from './image-helper.service';
import { IPlanet } from '../interfaces/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  private nextPath: any;
  private planetsArray: any = [];

  constructor(
    private http: HttpClient,
    private imageHelperService: ImageHelperService
  ) {}

  getPlanets(apiRequestPath: string): any {
    const params = new HttpParams().set('apiRequestPath', apiRequestPath);
    return this.http
      .get<IPlanet[]>('api/planets', { params: params })
      .pipe(
        map(res => {
          _.map(res['results'], (planet: any) => {
            planet['img_url'] = this.imageHelperService.getImagePath(planet, 'planets');
            return planet;
          });
          return res;
        }),
        // switchMap(res => {
        //   this.planetsArray = this.planetsArray.concat(res['results']);
        //   this.nextPath = res['next'];
        //   return this.nextPath ? this.getPlanets(this.nextPath) : Observable.of(this.planetsArray);
        // })
        map(res => {
          console.log('res', res);
          return res['results'];
        })
      );
  }
}
