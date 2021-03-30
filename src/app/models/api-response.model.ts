// TODO !!! Response model
export interface ApiResponseModel {
  total: number;
  totalHits: number;
  hits: HitsInterface[];
}

export interface HitsInterface {
  id: string;
  pageURL: string;
}
