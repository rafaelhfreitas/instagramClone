import { Routes } from "@angular/router";
import { AccessComponent } from "./access/access.component";
import { FeedComponent } from "./home/feed/feed.component";



export const ROUTES: Routes = [
    { path: '', component: AccessComponent },
    { path: 'home', component: FeedComponent },
]