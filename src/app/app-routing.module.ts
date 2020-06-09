import { NgModule } from "@angular/core";
import {CommonModule, HashLocationStrategy, LocationStrategy, PathLocationStrategy} from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./dodle/index/index.component";
import { LoginpageComponent } from "./dodle/loginpage/loginpage.component";
import { RegisterpageComponent } from "./dodle/registerpage/registerpage.component";
import {CreatepageComponent} from "./dodle/events/createpage/createpage.component";
import {OverviewpageComponent} from "./dodle/user/overviewpage/overviewpage.component";
import {AnswerpageComponent} from "./dodle/events/answerpage/answerpage.component";

const routes: Routes = [

  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: IndexComponent },
  { path: "login", component:LoginpageComponent },
  { path: "register", component:RegisterpageComponent },
  {
    path: "event",
    children: [
      { path: "create", component:CreatepageComponent},
      { path: "answer", component:AnswerpageComponent},
    ]
  },
  {
    path: "user",
    children: [
      { path: "events", component:OverviewpageComponent},
    ]
  },
  { path: '**', redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [],

  providers: [{
    provide: LocationStrategy,
    useClass: PathLocationStrategy
  }]
})
export class AppRoutingModule {}
