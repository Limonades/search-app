import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/searchService/search.service';
import { SearchFormDataModel } from '../../models/search-form-data.model';
import { ApiResponseModel } from '../../models/api-response.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { isEmptyObject } from '../../utils';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchResult?: ApiResponseModel;
  queryParams?: object;

  constructor(
    private searchService: SearchService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getUrlSearchParams();
  }

  getSearchResult(data: SearchFormDataModel): void {
    this.setSearchValueToQuery(data);

    this.searchService
      .getRequest(data)
      .subscribe((response) => (this.searchResult = response));
  }

  setSearchValueToQuery(data: SearchFormDataModel): void {
    this.router
      .navigate([], {
        queryParams: data,
        queryParamsHandling: 'merge',
      })
      .then((r) => Promise.resolve());
  }

  getUrlSearchParams(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (!isEmptyObject(params)) {
        this.queryParams = params;
      }
    });
  }
}
