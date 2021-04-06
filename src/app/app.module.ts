import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ContainerComponent } from './components/container/container.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ImageDetailComponent } from './components/image-detail/image-detail.component';

const routes = [
  { path: '', component: SearchComponent },
  { path: 'image-detail/:id', component: ImageDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ContainerComponent,
    SearchResultsComponent,
    SearchComponent,
    ImageDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
