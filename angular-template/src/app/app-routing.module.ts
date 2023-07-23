import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './shared/pages/welcome/welcome.component';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';
import { AuthLayoutComponent } from './layouts/views/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './layouts/views/admin-layout/admin-layout.component';

const routes: Routes = [
  // ROUTES
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  }, 
  
  // other routes
  {
      path: 'welcome',
      component: WelcomeComponent,
  },
  // passing routes from another module
  {
    path: '',
    component: AuthLayoutComponent, // view to be rendered
    children: [
      {
        path: '',
        // passing the routes defined in auth layout module
        loadChildren: () => import('src/app/layouts/modules/auth-layout.module').then(m => m.AuthLayoutModule),
      }
    ]
  },
  // ADMIN LAYOUT
  {
    path: '',
    component: AdminLayoutComponent, // view to be rendered
    children: [
      { 
        path: 'admin',
        loadChildren: () => import('src/app/layouts/modules/admin-layout.module').then(m => m.AdminLayoutModule),
      }
    ]
  },

  // adding a wild card
  {
      path: '**',
      component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
