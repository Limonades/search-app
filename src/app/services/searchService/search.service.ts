import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiResponseModel } from '../../models/api-response.model';
import { apiKey, apiUrl } from '../../consts/pixabay-api.const';
import { SearchFormDataModel } from '../../models/search-form-data.model';
import { SearchFormQueryParamsModel } from '../../models/search-form-query-params.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private params = new HttpParams();

  constructor(private http: HttpClient) {
    this.setParam({
      key: apiKey
    });
  }

  getRequest(query: SearchFormDataModel): Observable<ApiResponseModel> {
    this.setParam(query);

    return this.http.get<ApiResponseModel>(apiUrl, {
      params: this.params
    });
  }

  // TODO ? params[param]
  setParam(params: SearchFormQueryParamsModel): void {
    for (const param of Object.keys(params)) {
      // @ts-ignore
      this.params = this.params.set(param, params[param]);
    }
  }
}
