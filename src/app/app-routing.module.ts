import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./dodle/index/index.component";
import { LoginpageComponent } from "./dodle/loginpage/loginpage.component";
import { RegisterpageComponent } from "./dodle/registerpage/registerpage.component";
import {EvtcreatepageComponent} from "./dodle/evtcreatepage/evtcreatepage.component";
import {componentFactoryName} from "@angular/compiler";
import {EvtconsultpageComponent} from "./dodle/evtconsultpage/evtconsultpage.component";
import {EvtanswerpageComponent} from "./dodle/evtanswerpage/evtanswerpage.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: IndexComponent },
  { path: "login", component:LoginpageComponent },
  { path: "register", component:RegisterpageComponent },
  { path: "createevt", component:EvtcreatepageComponent},
  { path: "consultevt", component:EvtconsultpageComponent},
  { path : "answerevt", component: EvtanswerpageComponent},
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
