import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  removeHtmlTags = (htmlEl: string) => {
    if (typeof htmlEl === 'undefined' || htmlEl === null) {
      return ' ';
    }
    return htmlEl
      .toString()
      .replace(/(<([^>]+)>)/gi, '')
      .replace(/&nbsp;/g, '');
  };
}
