import { Component } from '@angular/core';
import { FishModel } from '../../models/fish';
import { FishService } from '../../services/fishservice.service';

@Component({
  selector: 'app-profile',
  providers: [FishService],
  templateUrl: 'profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  dataSource: FishModel[];
  colCountByScreen: object;

  constructor(service: FishService) {
    this.dataSource = service.getFishData();
    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
    };
  }
}
