import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ButtonComponent } from './admin/dashboard/button/button.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EchartsComponent } from './admin/dashboard/echarts/echarts.component';
import { AuthManageComponent } from './admin/setting/auth-manage/auth-manage.component';
import { BasicInfoComponent } from './admin/setting/basic-info/basic-info.component';
import { UserComponent } from './admin/user/user.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'setting',
        component: AdminComponent,
        children: [
          {
            path: '',
            redirectTo: 'basic-info',
            pathMatch: 'full'
          },
          {
            path: 'basic-info',
            component: BasicInfoComponent
          },
          {
            path: 'auth-manage',
            component: AuthManageComponent
          }
        ]
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          {
            path: '',
            redirectTo: 'button',
            pathMatch: 'full'
          },
          {
            path: 'button',
            component: ButtonComponent
          },
          {
            path: 'echarts',
            component: EchartsComponent
          }
        ]
      }
    ]
  },
  {
    path: '**',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
