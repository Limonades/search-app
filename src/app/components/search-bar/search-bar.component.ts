import { Component, EventEmitter, Output } from '@angular/core';

import { SearchService } from '../../services/searchService/search.service';
import { SEARCH_OPTIONS } from 'src/app/configs/search-options.config';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() searchValue$ = new EventEmitter<object>();

  public searchOptions = SEARCH_OPTIONS.per_page;

  constructor(
    private searchService: SearchService,
  ) { }

  handleInput(e: Event): void {
    const { value } = (e.target as HTMLTextAreaElement);

    // TODO remake for 1 stream
    this.searchService.getImages(value)
      .subscribe(
        (resp) => {
          this.searchValue$.emit({response: resp.hits, value});
        }
      );
  }

  onFilterChange(e: Event): void {
    const { value } = (e.target as HTMLTextAreaElement);

    this.searchService.setOutputQty(value);
  }
}
