import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/searchService/search.service';
import { ActivatedRoute } from '@angular/router';
import { ApiResponseModel, HitsInterface } from '../../models/api-response.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-img-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageDetailComponent implements OnInit {
  imageInfo$?: Observable<ApiResponseModel>;

  constructor(
    private searchService: SearchService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getInfo();
  }

  private getInfo(): void {
    this.imageInfo$ = this.searchService
      .getRequest$({
        id: this.activatedRoute.snapshot.paramMap.get('id')!,
      });
  }
}
