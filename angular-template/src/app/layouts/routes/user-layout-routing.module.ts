import { Routes } from "@angular/router";
import { DashboardComponent } from "src/app/views/pages/admin/dashboard/dashboard.component";
import { DocumentsComponent } from "src/app/views/pages/users/documents/documents.component";

export const UserLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'documents', component: DocumentsComponent },
];
