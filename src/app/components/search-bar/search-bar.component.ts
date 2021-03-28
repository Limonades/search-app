import { Component, EventEmitter, Output } from '@angular/core';

import { SearchService } from '../../services/searchService/search.service';
import { SEARCH_OPTIONS } from 'src/app/configs/search-options.config';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() searchValue$ = new EventEmitter<Array<object>>();

  public searchOptions = SEARCH_OPTIONS.per_page;

  constructor(
    private searchService: SearchService,
  ) { }

  handleInput(e: Event): void {
    const { value } = (e.target as HTMLTextAreaElement);

    this.searchService.getImages(value)
      .subscribe(
        (resp) => {
          this.searchValue$.emit(resp.hits);
        }
      );
  }

  onFilterChange(e: Event): void {
    const { value } = (e.target as HTMLTextAreaElement);

    this.searchService.setOutputQty(value);
  }
}
