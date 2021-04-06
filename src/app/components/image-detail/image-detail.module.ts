import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageDetailComponent } from './image-detail.component';
import { ImageDetailRoutingModule } from './image-detail-routing.module';
import { ContainerModule } from '../container/container.module';

@NgModule({
  declarations: [ImageDetailComponent],
  imports: [
    CommonModule,
    ImageDetailRoutingModule,
    ContainerModule
  ]
})
export class ImageDetailModule { }
