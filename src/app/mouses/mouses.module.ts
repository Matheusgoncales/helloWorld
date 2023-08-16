import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MousesPageRoutingModule } from './mouses-routing.module';

import { MousesPage } from './mouses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MousesPageRoutingModule
  ],
  declarations: [MousesPage]
})
export class MousesPageModule {}
