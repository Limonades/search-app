import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { ApiResponseModel } from '../../models/api-response.model';
import { apiKey, apiUrl } from '../../consts/pixabay-api.const';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private params = new HttpParams();
  private imagesData?: ApiResponseModel;

  constructor(private http: HttpClient) {
    this.setParam({
      key: apiKey
    });
  }

  getImages(query: object): void {
    this.setParam(query);

    this.http.get<ApiResponseModel>(apiUrl, {
      params: this.params
    }).subscribe((data) => {
      this.imagesData = data;
    });
  }

  // TODO ? params[param]
  setParam(params: any): void {
    for (const param of Object.keys(params)) {
      this.params = this.params.set(param, params[param]);
    }
  }
}
