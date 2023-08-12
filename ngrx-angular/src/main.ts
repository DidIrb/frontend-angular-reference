import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter } from "@angular/router";
import { appRoute } from "./app/app.routes";

bootstrapApplication(AppComponent, {providers : [provideRouter(appRoute)]});

// This file needed to change because since we are using stand alone components instead