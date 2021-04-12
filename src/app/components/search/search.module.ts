import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { ContainerModule } from '../container/container.module';
import { SearchBarModule } from '../search-bar/search-bar.module';
import { SearchResultsModule } from '../search-results/search-results.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ContainerModule,
    SearchBarModule,
    SearchResultsModule
  ]
})
export class SearchModule { }
