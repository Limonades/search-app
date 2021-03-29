import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  imagesResponse?: object;
  isQuery?: boolean;

  constructor() { }

  getImages(data: object): void {
    // TODO ?
    // @ts-ignore
    this.imagesResponse = data.response;
    // @ts-ignore
    this.isQuery = data.value.trim().length;
  }
}
