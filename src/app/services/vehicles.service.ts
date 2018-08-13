import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { switchMap, map } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import * as _ from 'lodash';

import { ImageHelperService } from './image-helper.service';
import { IVehicle } from '../interfaces/vehicle';


@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  private nextPath: any;
  private vehiclesArray: any = [];

  constructor(
    private http: HttpClient,
    private imageHelperService: ImageHelperService
  ) {}

  getVehicles(apiRequestPath: string): any {
    const params = new HttpParams().set('apiRequestPath', apiRequestPath);
    return this.http
      .get<IVehicle[]>('api/vehicles', { params: params })
      .pipe(
        map(res => {
          _.map(res['results'], (vehicle: any) => {
            vehicle['img_url'] = this.imageHelperService.getImagePath(vehicle, 'vehicles');
            return vehicle;
          });
          return res;
        }),
        // switchMap(res => {
        //   this.vehiclesArray = this.vehiclesArray.concat(res['results']);
        //   this.nextPath = res['next'];
        //   return this.nextPath ? this.getVehicles(this.nextPath) : Observable.of(this.vehiclesArray);
        // })
        map(res => {
          console.log('res', res);
          return res['results'];
        })
      );
  }
}
