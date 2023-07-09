import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './components/forms/forms.component';
import { ConceptsComponent } from './components/concepts/concepts.component';
import { IntroComponent } from './components/intro/intro.component';
import { ConceptsAdvancedComponent } from './components/concepts-advanced/concepts-advanced.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ConceptsComponent,
    IntroComponent,
    ConceptsAdvancedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
