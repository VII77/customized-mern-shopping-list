import { MainContentComponent } from './components/main-content/main-content.component';
import { ArticleComponent } from './components/article/article.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { SubNavComponent } from './components/sub-nav/sub-nav.component';
import { NavComponent } from './components/nav/nav.component';
import { MaterialModule } from './modules/material/material.module';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SubNavComponent,
    ManageUsersComponent,
    ArticleComponent,
    MainContentComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ButtonsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
