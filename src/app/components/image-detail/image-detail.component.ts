import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/searchService/search.service';
import { ActivatedRoute } from '@angular/router';
import { HitsInterface } from '../../models/api-response.model';

@Component({
  selector: 'app-img-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss'],
})
export class ImageDetailComponent implements OnInit {
  imageInfo?: HitsInterface;

  constructor(
    private searchService: SearchService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getInfo();
  }

  private getInfo(): void {
    this.searchService
      .getRequest({
        id: this.activatedRoute.snapshot.paramMap.get('id')!,
      })
      .subscribe((data) => {
        this.imageInfo = data.hits[0];
      });
  }
}
