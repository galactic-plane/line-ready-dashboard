import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'time' })
export class TimePipe implements PipeTransform {
  transform(value: number): string {
    return '00:00:' + ('0' + value).slice(-2);
  }
}

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

  constructor() {
    this.frameHeight = window.innerHeight - 300;
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
