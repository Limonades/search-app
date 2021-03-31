import { Component } from '@angular/core';
import { SearchService } from '../../services/searchService/search.service';
import { SearchFormDataModel } from '../../models/search-form-data.model';
import { ApiResponseModel } from '../../models/api-response.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchResult?: ApiResponseModel;

  constructor(
    private searchService: SearchService,
  ) { }

  getSearchResult(data: SearchFormDataModel): void {
    this.searchService.getRequest(data)
      .subscribe(response => this.searchResult = response);
  }
}
