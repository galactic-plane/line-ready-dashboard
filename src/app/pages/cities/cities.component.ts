import { Component, ViewChild } from '@angular/core';
import { MarkerModel } from '../../models/marker';
import { CityService } from '../../services/cityservice.service';
import { DxVectorMapComponent } from 'devextreme-angular';
import { CommonService } from '../../shared/services/common.service';
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
  markers: MarkerModel[];
  rawData: string;

  customizeTooltip = (arg) => {
    if (arg.layer.type === 'marker') {
      return {
        text: arg.attribute('name'),
      };
    }
  };

  markerClick = (e) => {
    if (e.target && e.target.layer.type === 'marker') {
      e.component.center(e.target.coordinates()).zoomFactor(10);
    }
  };

  resetClick = () => {
    this.vectorMap.instance.center(null);
    this.vectorMap.instance.zoomFactor(null);
  };

  constructor(service: CityService, commonService: CommonService) {
    this.markers = service.getCityData();
    this.rawData = commonService.outputObject(
      commonService.syntaxHighlight(JSON.stringify(this.markers, undefined, 4))
    );
  }
}
