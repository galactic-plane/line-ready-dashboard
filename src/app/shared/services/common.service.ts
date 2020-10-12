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

  routePath = (href: string, newPath: string) => {
    return (
      href
        .replace(/home/g, '')
        .replace(/profile/g, '')
        .replace(/cities/g, '') + newPath
    );
  };
}
