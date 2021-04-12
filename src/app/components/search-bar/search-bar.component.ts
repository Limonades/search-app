import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input, OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Params } from '@angular/router';

import { SEARCH_OPTIONS } from 'src/app/configs/search-options.config';
import { SearchFormDataModel } from '../../models/search-form-data.model';
import { SearchFormValuesModel } from '../../models/search-form-values.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent implements OnInit, OnDestroy {
  @Output() formUpdates: EventEmitter<SearchFormDataModel> = new EventEmitter();
  @Input() queryParams?: Params;

  qtyOptions = SEARCH_OPTIONS.per_page.values;

  searchForm = new FormGroup({
    query: new FormControl(''),
    perPageQty: new FormControl(SEARCH_OPTIONS.per_page.default),
  });

  constructor() {}

  ngOnInit(): void {
    this.searchForm.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe((form) => {
        return this.formUpdates.emit({
          q: form.query,
          per_page: form.perPageQty,
        });
      });

    if (this.queryParams) {
      this.searchForm.patchValue(this.parseQueryParams(this.queryParams));
    }
  }

  ngOnDestroy(): void {
    // TODO ? unsubscribe
  }

  private parseQueryParams(params: Params): SearchFormValuesModel {
    const values: SearchFormValuesModel = {};

    if (params.q) {
      values.query = params.q;
    }

    if (params.per_page) {
      values.perPageQty = params.per_page;
    }

    return values;
  }
}
