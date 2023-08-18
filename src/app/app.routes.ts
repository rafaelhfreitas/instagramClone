import { Routes } from "@angular/router";

import { AccessComponent } from "./access/access.component";
import { HomeComponent } from "./home/home.component";

import { AuthGuard } from "./auth-guard.service";



export const ROUTES: Routes = [
    { path: '', component: AccessComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
]