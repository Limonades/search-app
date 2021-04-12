import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/search/search.module').then(m => m.SearchModule)
  },
  {
    path: 'image-detail/:id',
    loadChildren: () => import('./components/image-detail/image-detail.module').then(m => m.ImageDetailModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
