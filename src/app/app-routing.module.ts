import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationGuard } from './services/application.guard';
import { LoginComponent } from './pages/login/login.component';
import { PreLaunchComponent } from './pre-launch/pre-launch.component';
import { AllComponentsComponent } from './all-components/all-components.component';

const routes: Routes = [
  {
    path: '',
    component: PreLaunchComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'test',// to be removed after finishing : contains all mocks 
    component: AllComponentsComponent
  },
  {
    path: 'beta-portal',
    loadChildren: () =>
      import('./pages/portal/portal.module').then((m) => m.PortalModule)
  },
  {
    path: 'beta-admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [ApplicationGuard],
    canLoad: [ApplicationGuard],
    canActivateChild: [ApplicationGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
