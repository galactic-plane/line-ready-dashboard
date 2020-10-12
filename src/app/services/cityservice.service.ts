import { Injectable } from '@angular/core';
import { StaticCityData } from '../shared/data/citydata';
import { Marker, Attributes } from '../models/marker';

const markers: Marker[] = [];

@Injectable({
  providedIn: 'root',
})
export class CityService {
  marker: Marker;

  getCityData = (): Marker[] => {
    for (const element of StaticCityData) {
      this.marker = new Marker();
      this.marker.coordinates = [element.coord.lon, element.coord.lat];
      this.marker.attributes = new Attributes();
      this.marker.attributes.name = element.name + ', ' + element.state;
      markers.push(this.marker);
    }

    return markers;
  };

  constructor() {}
}
