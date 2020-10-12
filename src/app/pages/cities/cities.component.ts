import { Component, ViewChild } from '@angular/core';
import { Marker } from '../../models/marker';
import { CityService } from '../../services/cityservice.service';
import { DxVectorMapComponent } from 'devextreme-angular';

import * as mapsData from 'devextreme/dist/js/vectormap-data/usa.js';

@Component({
  selector: 'app-city',
  providers: [CityService],
  templateUrl: 'cities.component.html',
})
export class CitiesComponent {
  @ViewChild(DxVectorMapComponent, { static: false })
  vectorMap: DxVectorMapComponent;
  usaMap: any = mapsData.usa;
  markers: Marker[];

  customizeTooltip = (arg) => {
    if (arg.layer.type === 'marker') {
      return {
        text: arg.attribute('name'),
      };
    }
    // tslint:disable-next-line: semicolon
  };

  markerClick = (e) => {
    if (e.target && e.target.layer.type === 'marker') {
      e.component.center(e.target.coordinates()).zoomFactor(10);
    }
    // tslint:disable-next-line: semicolon
  };

  resetClick = () => {
    this.vectorMap.instance.center(null);
    this.vectorMap.instance.zoomFactor(null);
    // tslint:disable-next-line: semicolon
  };

  constructor(service: CityService) {
    this.markers = service.getCityData();
  }
}
