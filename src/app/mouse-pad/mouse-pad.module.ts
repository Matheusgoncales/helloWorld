import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MousePadPageRoutingModule } from './mouse-pad-routing.module';

import { MousePadPage } from './mouse-pad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MousePadPageRoutingModule
  ],
  declarations: [MousePadPage]
})
export class MousePadPageModule {}
