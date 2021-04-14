import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ApiResponseModel } from '../../models/api-response.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent {
  @Input() searchResult?: ApiResponseModel;

  constructor() { }
}
