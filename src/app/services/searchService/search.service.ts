import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiResponseModel } from '../../models/api-response.model';
import { apiKey, apiUrl } from '../../consts/pixabay-api.const';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private params = new HttpParams();

  constructor(private http: HttpClient) {
    this.setParam('key', apiKey);
  }

  getImages(query: string): Observable<ApiResponseModel>{
    return this.http.get<ApiResponseModel>(apiUrl, {
      params: this.params.set('q', query)
    });
  }

  setOutputQty(value: string): void {
    this.setParam('per_page', value);
  }

  setParam(key: string, value: string): void {
    this.params = this.params.set(key, value);
  }
}
