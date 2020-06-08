import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./dodle/index/index.component";
import { LoginpageComponent } from "./dodle/loginpage/loginpage.component";
import { RegisterpageComponent } from "./dodle/registerpage/registerpage.component";
import {CreatepageComponent} from "./dodle/events/createpage/createpage.component";
import {componentFactoryName} from "@angular/compiler";
import {OverviewpageComponent} from "./dodle/events/overviewpage/overviewpage.component";
import {AnswerpageComponent} from "./dodle/events/answerpage/answerpage.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: IndexComponent },
  { path: "login", component:LoginpageComponent },
  { path: "register", component:RegisterpageComponent },
  { path: "createevt", component:CreatepageComponent},
  { path: "consultevt", component:OverviewpageComponent},
  { path : "answerevt", component: AnswerpageComponent},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}
