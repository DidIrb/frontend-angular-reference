import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './shared/pages/welcome/welcome.component';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';
import { AuthLayoutComponent } from './layouts/views/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './layouts/views/admin-layout/admin-layout.component';
import { ComponentsModule } from './shared/components/modules/components.module';
import { AuthGuardService } from './services/auth.service';
import { UserLayoutComponent } from './layouts/views/user-layout/user-layout.component';
import { DocumentsComponent } from './views/pages/users/documents/documents.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    AuthLayoutComponent,
    AdminLayoutComponent,
    UserLayoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule // Importing all the components declared, to be accessed globally
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
