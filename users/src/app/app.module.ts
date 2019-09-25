import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule }  from '@angular/router';

import { AppComponent } from './app.component';
import { Head1Component } from './head1/head1.component';
import { Footer1Component } from './footer1/footer1.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './providers/auth.service';
import { UserComponent } from './user/user.component';
import { UsersService } from './providers/users.service';


const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'users', component: UserComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    Head1Component,
    Footer1Component,
    UserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UsersService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
