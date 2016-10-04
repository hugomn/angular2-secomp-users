import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail.component';

import { routing } from './app.routing';

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      routing
  ],
  declarations: [
      AppComponent,
      DashboardComponent,
      UserComponent,
      UserDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
