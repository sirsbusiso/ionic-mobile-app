import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Covid19Page } from './covid19.page';

const routes: Routes = [
  {
    path: '',
    component: Covid19Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Covid19PageRoutingModule {}
