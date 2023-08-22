import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';


import { AppComponent } from './app.component';
import { AccessComponent } from './access/access.component';
import { BannerComponent } from './access/banner/banner.component';
import { LoginComponent } from './access/login/login.component';
import { RegisterComponent } from './access/register/register.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './home/feed/feed.component';
import { AuthGuard } from './auth-guard.service';
import { AddContentComponent } from './home/add-content/add-content.component';

import { AuthService } from './auth.service';
import { RepositoryService } from './repository.service';


@NgModule({
  declarations: [
    AppComponent,
    AccessComponent,
    BannerComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FeedComponent,
    AddContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthService, AuthGuard, RepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
