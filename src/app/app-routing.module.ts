import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { P404Component } from './components/P404.component';
import { IntroComponent } from './components/intro/intro.component';
import { ConceptsComponent } from './components/concepts/concepts.component';
import { ConceptsAdvancedComponent } from './components/concepts-advanced/concepts-advanced.component';

// Here is where you place all your routes 
const routes: Routes = [

  {
    path: 'dddd',
    redirectTo: '',
    pathMatch: 'full',
  }, 
  
  // Navigate to admin page if the user role is ADMIN
  {
    path: '',
    component: IntroComponent,
  },
  
  {
    path: 'concepts',
    component: ConceptsComponent,
  },
  {
    path: 'concepts-advanced',
    component: ConceptsAdvancedComponent,
  },

  // You have to specify all routes if a route that doesn't exist is typed it should show the page not found component
  // This is a wildcard
  // {
  //   path: '**',
  //   component:P404Component,
  // },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
