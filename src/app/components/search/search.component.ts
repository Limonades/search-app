import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/searchService/search.service';
import { SearchFormDataModel } from '../../models/search-form-data.model';
import { ApiResponseModel } from '../../models/api-response.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { filter, take, takeWhile } from 'rxjs/operators';

import isEmptyObject from '../../helpers/is-empty-object.helper';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  searchResult$: Observable<ApiResponseModel>;
  queryParams$: Observable<Params>;

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

    this.searchResult$ = this.searchService.getRequest(data);
  }

  private setSearchValueToQuery(data: SearchFormDataModel): void {
    this.router
      .navigate([], {
        queryParams: data,
        queryParamsHandling: 'merge',
      });
  }

  private getUrlSearchParams(): void {
    this.queryParams$ = this.activatedRoute.queryParams.pipe(
        take(1),
        filter(params => !isEmptyObject(params))
    );
  }
}
