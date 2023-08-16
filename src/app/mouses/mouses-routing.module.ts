import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MousesPage } from './mouses.page';

const routes: Routes = [
  {
    path: '',
    component: MousesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MousesPageRoutingModule {}
