import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllPeoplePageRoutingModule } from './all-people-routing.module';

import { AllPeoplePage } from './all-people.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllPeoplePageRoutingModule
  ],
  declarations: [AllPeoplePage]
})
export class AllPeoplePageModule {}
