import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';

// template-driven, reactive
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        ReactiveComponent,
        TemplateDrivenComponent,
    ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
