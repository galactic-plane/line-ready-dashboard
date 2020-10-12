import { Injectable } from '@angular/core';
import { StaticCityData } from '../shared/data/citydata';
import { MarkerModel, Attributes } from '../models/marker';

const markers: MarkerModel[] = [];

@Injectable({
  providedIn: 'root',
})
export class CityService {
  marker: MarkerModel;

  getCityData = (): MarkerModel[] => {
    for (const element of StaticCityData) {
      this.marker = new MarkerModel();
      this.marker.coordinates = [element.coord.lon, element.coord.lat];
      this.marker.attributes = new Attributes();
      this.marker.attributes.name = element.name + ', ' + element.state;
      markers.push(this.marker);
    }

    return markers;
  };

  constructor() {}
}
