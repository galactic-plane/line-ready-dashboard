import { Injectable } from '@angular/core';
import { CommonService } from '../shared/services/common.service';
import { FishModel } from '../models/fish';
import { StaticFishData } from '../shared/data/fishdata';

@Injectable({
  providedIn: 'root',
})
export class FishService {
  serviceHelper: CommonService;

  getFishData = (): FishModel[] => {
    for (const element of StaticFishData) {
      for (const [key, value] of Object.entries(element)) {
        if (key !== 'speciesIllustrationPhoto') {
          element[key] = this.serviceHelper.removeHtmlTags(value);
        }
      }
    }
    return StaticFishData;
  };

  constructor(service: CommonService) {
    this.serviceHelper = service;
  }
}
