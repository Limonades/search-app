import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { SearchService } from '../../services/searchService/search.service';
import { SEARCH_OPTIONS } from 'src/app/configs/search-options.config';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SearchFormDataModel } from '../../models/search-form-data.model';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit{
  public qtyOptions = SEARCH_OPTIONS.per_page.values;
  @Output() formUpdates: EventEmitter<SearchFormDataModel> = new EventEmitter();

  searchForm = new FormGroup({
    query: new FormControl(''),
    perPageQty: new FormControl(SEARCH_OPTIONS.per_page.default),
  });

  constructor() {}

  ngOnInit(): void {
    this.searchForm.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
      )
      .subscribe(form => this.formUpdates.emit(form));
  }
}
