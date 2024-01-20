import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './pages/dashboardLayout/dashboardLayout.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
