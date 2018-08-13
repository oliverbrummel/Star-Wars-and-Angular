import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageHelperService {

  constructor() { }

  getImagePath(resource: any, resourceType: string) {
    const id = this.findIdFromUrl(resource['url']);
    return '../assets/img/' + resourceType + '/' + id + '.jpg';
  }

  findIdFromUrl(url: string): any {
    const id: any = url.match(/([0-9])+/g);
    return id[0];
  }
}
