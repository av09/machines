import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MachineListComponent} from './machine-list/machine-list.component';

const routes: Routes = [
  { path: '', component: MachineListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
