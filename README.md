# ANGULAR NgRx
NgRx is a popular solution in the Angular ecosystem if you are building complex web applications with sophisticated state management. 
Based on react redux it makes it simple to build complex web applications enabling us to manage states in our application. 
NgRx makes our web applications fast.

## Getting started

Setting up our environment is show [here](https://github.com/DidIrb/frontend-angular-reference)

At this point I am assuming you have generated the code and are running

In this project our code is inside the NgRx-angular file so in order to run it write command

    cd ngrx-angular 
    npm start

Now that our project is running we need to remove some unnecessary code.

Delete everything in the [app.component.html](./ngrx-angular/src/app/app.component.html)  and remain only with

    <router-outlet></router-outlet>

There are 2 ways of creating our project

- modules and component
- stand alone components (modules are optional) less code needed now

In our project we use stand alone components so delete the 
[app.module.ts]

Now you will need to update the main.ts file now because of the error so go to the [main.ts](./ngrx-angular/src/main.ts) write 

    import { bootstrapApplication } from "@angular/platform-browser";
    import { AppComponent } from "./app/app.component";

    bootstrapApplication(AppComponent, {providers : []});

In order for this to work we need to tell app.component.ts that it is a standalone and to also use router-outlet you add

    @Component({
        //... 
        standalone: true,
        imports: [RouterOutlet], // components works like Modules
    })

### Project structure

    /app
        /article
            /components
            /store
             article.routes
        /global
            /components
        global.routes
        /shared
            /components
            /types
            /services
        app.routes
    main.ts

We are going to use a public api in order to learn using NgRx

#### Setting up routing

create app.routes.ts in **src/app** add:

    import { Route } from "@angular/router";

    export const appRoute: Route[] = [
        {
            path: '',
            loadChildren: () => import ('src/app/auth/auth.routes')
            .then((m) => m.registerRoute)// LoadChildren enables lazy loading
        }
    ]

create your paths that can be lazy loaded in the main routes file eg **auth.routes.ts** add:

    // imports

    export const registerRoute: Route[] = [
        {
            path: '',
            component: Component
        }
    ]

In order for the routes to work we need to update **main.ts** and provide routes to it

    // imports

    bootstrapApplication(AppComponent, {providers : [provideRouter(appRoute)]});


Working on The project now lets get started [read more](./HowTo.md).

