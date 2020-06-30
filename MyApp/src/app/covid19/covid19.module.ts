import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Covid19PageRoutingModule } from './covid19-routing.module';

import { Covid19Page } from './covid19.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Covid19PageRoutingModule
  ],
  declarations: [Covid19Page]
})
export class Covid19PageModule {}
