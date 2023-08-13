import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { appRoute } from './app/app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(appRoute), provideStore(), provideStoreDevtools({
    maxAge: 25, 
    logOnly: !isDevMode(), 
    autoPause: true, 
    trace: false,
    traceLimit: 75
  })],
});

// This file needed to change because since we are using stand alone components instead
