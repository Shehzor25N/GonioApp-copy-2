
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { WelcomePageRoutingModule } from './welcome-routing.module';
import { WelcomePage } from './welcome.page';

@NgModule({
  imports: [
    IonicModule
  ],
  declarations: [WelcomePage]
})
export class WelcomePageModule {}

