import { Component } from '@angular/core';
import { PercentPipe } from '@angular/common';
import {
  fishByAvailability,
  FishByAvailabilityModel,
  StaticFishData,
} from '../../shared/data/fishdata';
import { FishModel } from '../../models/fish';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  pipe: any = new PercentPipe('en-US');
  fishByAvailabilityDataSource: FishByAvailabilityModel[];
  staticFishDataDataSource: FishModel[];

  constructor() {
    this.fishByAvailabilityDataSource = fishByAvailability;
    this.staticFishDataDataSource = StaticFishData;
  }

  customizeTooltip = (arg: any) => {
    return {
      text: arg.valueText + ' - ' + this.pipe.transform(arg.percent, '1.2-2'),
    };
  };

  customizeLabel = (point: any) => {
    return point.argumentText + ': ' + point.valueText + '%';
  };
}
