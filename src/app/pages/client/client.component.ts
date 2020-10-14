import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  inProgress = false;
  seconds = 60;
  maxValue = 60;
  intervalId: any;
  frameHeight: number;
  statusMsg: string;
  webLink: string;

  constructor() {
    this.frameHeight = window.innerHeight - 300;
    this.statusMsg = 'Initializing';
    this.webLink = '';
  }

  ngOnInit(): void {
    if (this.inProgress) {
      clearInterval(this.intervalId);
    } else {
      if (this.seconds === 0) {
        this.seconds = 10;
      }
      this.intervalId = setInterval(() => this.timer(), 1000);
    }
    this.inProgress = !this.inProgress;
  }

  timer = () => {
    this.seconds--;
    switch (true) {
      case this.seconds > 50:
        this.statusMsg = 'Provisioning Server';
        break;
      case this.seconds > 40:
        this.statusMsg = 'Installing Application';
        break;
      case this.seconds > 30:
        this.statusMsg = 'Restoring Packages';
        break;
      case this.seconds > 20:
        this.statusMsg = 'Building Application';
        break;
      case this.seconds > 10:
        this.statusMsg = 'Booting Application';
        break;
      default:
        this.statusMsg = '';
        this.webLink =
          '<a href="https://line-ready.azurewebsites.net/" target="_blank">https://line-ready.azurewebsites.net/</a>';
        break;
    }
    if (this.seconds === 0) {
      this.inProgress = !this.inProgress;
      clearInterval(this.intervalId);
      return;
    }
  };

  loadDone = () => {
    this.seconds = 5;
    this.intervalId = setInterval(() => this.timer(), 1000);
  };

  format = (value: number): string => {
    return 'Loading: ' + Math.round(value * 100) + '%';
  };
}
