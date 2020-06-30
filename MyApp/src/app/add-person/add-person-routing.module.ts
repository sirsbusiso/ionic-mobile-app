import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPersonPage } from './add-person.page';

const routes: Routes = [
  {
    path: '',
    component: AddPersonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPersonPageRoutingModule {}
