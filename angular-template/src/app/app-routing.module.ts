import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './shared/pages/welcome/welcome.component';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';

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
