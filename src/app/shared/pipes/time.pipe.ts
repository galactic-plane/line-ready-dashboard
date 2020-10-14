import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'time' })
export class TimePipe implements PipeTransform {
  transform(value: number): string {
    if (typeof value !== 'undefined' && value !== null && value > 0) {
      return ': 00:00:' + ('0' + value).slice(-2);
    } else {
      return '';
    }
  }
}
