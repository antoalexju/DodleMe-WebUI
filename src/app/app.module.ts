import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import {EventlistComponent} from "./dodle/events/eventlist/eventlist.component";

import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { PopoverModule } from "ngx-bootstrap/popover";

import { IndexComponent } from "./dodle/index/index.component";
import { RegisterpageComponent } from './dodle/registerpage/registerpage.component';
import { LoginpageComponent } from './dodle/loginpage/loginpage.component';
import { FooterComponent } from './dodle/modules/footer/footer.component';
import { NavbarComponent } from './dodle/modules/navbar/navbar.component';
import { CreatepageComponent } from './dodle/events/createpage/createpage.component';
import { OverviewpageComponent } from './dodle/events/overviewpage/overviewpage.component';
import { ConsulteventlistComponent } from './dodle/events/consulteventlist/consulteventlist.component';
import { CreatedevtlistComponent } from './dodle/events/createdevtlist/createdevtlist.component';
import { AnswerpageComponent } from './dodle/events/answerpage/answerpage.component';
import { TimeeventlistComponent } from './dodle/events/timeeventlist/timeeventlist.component';


@NgModule({
    declarations: [
        AppComponent,
        EventlistComponent,
        // DemoIndexComponent,
        // DemoProfilepageComponent,
        // DemoRegisterpageComponent,
        // DemoLandingpageComponent
        IndexComponent,
        RegisterpageComponent,
        LoginpageComponent,
        FooterComponent,
        NavbarComponent,
        CreatepageComponent,
        OverviewpageComponent,
        ConsulteventlistComponent,
        CreatedevtlistComponent,
        AnswerpageComponent,
        TimeeventlistComponent
    ],
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        AppRoutingModule,
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        JwBootstrapSwitchNg2Module,
        BsDropdownModule.forRoot(),
        PopoverModule.forRoot(),
        TabsModule.forRoot(),
        PaginationModule.forRoot(),
        AlertModule.forRoot(),
        BsDatepickerModule.forRoot(),
        CarouselModule.forRoot(),
        ModalModule.forRoot(),
        ProgressbarModule.forRoot(),
        TooltipModule.forRoot(),
        CollapseModule.forRoot()
    ],
    providers: [],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
