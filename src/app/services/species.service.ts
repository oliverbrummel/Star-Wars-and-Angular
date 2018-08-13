import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { switchMap, map } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import * as _ from 'lodash';

import { ImageHelperService } from './image-helper.service';
import { ISpecies } from '../interfaces/species';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {
  private nextPath: any;
  private speciesArray: any = [];

  constructor(
    private http: HttpClient,
    private imageHelperService: ImageHelperService
  ) {}

  getSpecies(apiRequestPath: string): any {
    const params = new HttpParams().set('apiRequestPath', apiRequestPath);
    return this.http
      .get<ISpecies[]>('api/species', { params: params })
      .pipe(
        map(res => {
          _.map(res['results'], (species: any) => {
            species['img_url'] = this.imageHelperService.getImagePath(species, 'species');
            return species;
          });
          return res;
        }),
        // switchMap(res => {
        //   this.speciesArray = this.speciesArray.concat(res['results']);
        //   this.nextPath = res['next'];
        //   return this.nextPath ? this.getSpecies(this.nextPath) : Observable.of(this.speciesArray);
        // })
        map(res => {
          console.log('res', res);
          return res['results'];
        })
      );
  }
}
