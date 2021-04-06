import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

import { SEARCH_OPTIONS } from 'src/app/configs/search-options.config';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SearchFormDataModel } from '../../models/search-form-data.model';
import { Params } from '@angular/router';
import { SearchFormValuesModel } from '../../models/search-form-values.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
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
      .pipe(debounceTime(300), distinctUntilChanged())
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

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes.queryParams.currentValue) {
  //     this.searchForm.setValue(
  //       this.parseQueryParams(changes.queryParams.currentValue)
  //     );
  //   }
  // }

  parseQueryParams(params: Params): SearchFormValuesModel {
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
