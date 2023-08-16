import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeadSetPage } from './head-set.page';

const routes: Routes = [
  {
    path: '',
    component: HeadSetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeadSetPageRoutingModule {}
