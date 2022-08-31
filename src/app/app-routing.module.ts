import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveComponent} from "./reactive/reactive.component";
import {TemplateDrivenComponent} from "./template-driven/template-driven.component";

const routes: Routes = [
  { path: 'a' , component: ReactiveComponent },
  { path: 'b' , component: TemplateDrivenComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
