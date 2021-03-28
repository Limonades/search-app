import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  imagesResponse?: Array<object>;

  constructor() { }

  getImages(resp: Array<object>): void {
    this.imagesResponse = resp;
  }
}
