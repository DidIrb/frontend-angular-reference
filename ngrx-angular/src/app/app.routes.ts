import { Route } from "@angular/router";

export const appRoute: Route[] = [
    {
        path: 'register',
        loadChildren: () => import ('src/app/auth/auth.routes').then((m) => m.registerRoute)
        // LoadChildren enables lazy loading
    }
]
