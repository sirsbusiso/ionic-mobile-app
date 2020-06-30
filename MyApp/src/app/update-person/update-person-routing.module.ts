import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePersonPage } from './update-person.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatePersonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePersonPageRoutingModule {}
