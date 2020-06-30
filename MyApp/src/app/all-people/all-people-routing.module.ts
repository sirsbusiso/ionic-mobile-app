import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllPeoplePage } from './all-people.page';

const routes: Routes = [
  {
    path: '',
    component: AllPeoplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllPeoplePageRoutingModule {}
