import { RxjsComponent } from './rxjs/rxjs.component';

import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';



const pagesRoutes: Routes = [

{path: '',
  component: PagesComponent,
  children: [
  {path: 'progress', component: ProgressComponent, data: {titulo: 'Progress'}},
  {path: 'graficas1', component: Graficas1Component, data: {titulo: 'Graficas'}},
  {path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'}},
  {path: 'accout-settings', component: AccoutSettingsComponent, data: {titulo: 'Ajustes del tema'}},
  {path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'}},
  {path: 'rxjs', component: RxjsComponent, data: {titulo: 'RXJS'}},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},

]
}


];

export const PAGES_ROUTES = RouterModule.forChild (pagesRoutes);
