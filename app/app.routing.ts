import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }      from './dashboard.component';
import { UserComponent }      from './user.component';
import { UserDetailComponent }      from './user-detail.component';

const appRoutes: Routes = [
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    },
    {
        path: 'users',
        component: UserComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
      path: 'detail/:id',
      component: UserDetailComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
