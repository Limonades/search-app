import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiResponseModel } from '../../models/api-response.model';
import { apiKey, apiUrl } from '../../consts/pixabay-api.const';
import { SearchFormDataModel } from '../../models/search-form-data.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private params = new HttpParams();

  constructor(private http: HttpClient) {
    this.params = this.params.set('key', apiKey);
  }

  getRequest(query: SearchFormDataModel): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(apiUrl, {
      // @ts-ignore
      params: this.params.appendAll(query),
    });
  }
}
