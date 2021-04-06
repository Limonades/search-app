import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './search-results.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SearchResultsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SearchResultsComponent]
})
export class SearchResultsModule { }
