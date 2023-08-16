import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MousePadPage } from './mouse-pad.page';

const routes: Routes = [
  {
    path: '',
    component: MousePadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MousePadPageRoutingModule {}
