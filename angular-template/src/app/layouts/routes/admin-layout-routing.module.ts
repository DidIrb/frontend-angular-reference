import { Routes } from "@angular/router";
import { DashboardComponent } from "src/app/views/pages/admin/dashboard/dashboard.component";
import { UsersComponent } from "src/app/views/pages/admin/users-list/users.component";

export const AdminLayoutRoutes: Routes = [
    // Placing routes for the Admin Layout
    { path: 'dashboard', component: DashboardComponent },
    { path: 'users', component: UsersComponent },
];
