import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeadSetPageRoutingModule } from './head-set-routing.module';

import { HeadSetPage } from './head-set.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeadSetPageRoutingModule
  ],
  declarations: [HeadSetPage]
})
export class HeadSetPageModule {}
