import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Head1Component } from './head1/head1.component';
import { Footer1Component } from './footer1/footer1.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    Head1Component,
    Footer1Component,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
