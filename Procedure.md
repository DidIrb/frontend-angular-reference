# Angular guide

Angular is a front web js framework we ca use to create our front end applications, there are a few things you might need to do before you start.

Refer to the [ReadMe](./README.md) file for the process of setting up our environment and initializing our angular application

In this tutorial we are going to cover the following topics, 
- How to connect to an API
- Using routes
- Protecting routes
- Using forms

## Project structure

In angular there are:

- components - reusable code.
- modules - 
- binding - dynamically changing values in html
- directives - conditional rendering - js in html
- services - 

we need to use them to our to simplify our coding process
but before that let us start with our project structure

All our code is placed in our src folder and in it we have 2 folders **app** and **assets**, our code is written inside the app folder and we place whatever assets eg images, css, etc. we have there.

Our package.json file contains a list of all our dependencies, when we clone this project we run npm install and node will refer to this file and install all the dependencies.


Withing our app folder we have a few files :

- app.routing.module - lists all the routes in our application
- app.component.html - the html is placed here
- app.component.scss - css is placed here
- app.component.spec.ts - this fill is used for testing
- app.component.ts - we place our methods here

_Note - This files are the entry point to our application_

Let us get started we will write comments to explain various things.


### Routing 

In order to use routing in our application we need the routing.module.ts file

inside the html we add the - this tells it to render the component that is attached to that route.

    <router-outlet></router-outlet>

We add our routes inside this array like so

    const routes: Routes = [
        // list of routes
        {
            path: '',
            redirectTo: 'sign-in',
            pathMatch: 'full',
        }, 

        // adding a wild card
        {
            path: '**',
            component: PageNotFoundComponent,
        },
        // other routes
        {
            path: 'sign-in',
            component: SignInComponent,
        },
    ];

When working with a complex application we cannot add all our code in one file we separate them and import.

create a layout folder and add a component.

    //List of routes
      {
            path: '',
            component: CoordinatorLayoutComponent,
            children: [
                {
                    path: 'coordinator',
                    loadChildren: () => 
                    import('src/app/layouts/layout/layout.module')
                    .then(m => m.CoordinatorLayoutModule),
                }
            ]
        },
    //

In this example we have two layouts

- authentication layout
- admin layout
- user layout

Routing modules

// Import the modules

// Import components here

    @NgModule({
        imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes), // Add the routes
        HttpClientModule,

        ],
        declarations: [
            // add our components here
        ]
    })
    
    // Export the layout module
    export class AdminLayoutModule {}
### Components
In order to generate a component we use the command

    ng  generate component ComponentName


### Topics to cover -

Protecting routes
Role based access control
Redirecting
