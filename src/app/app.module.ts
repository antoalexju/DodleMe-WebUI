import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { PagesModule } from "./dodle/pages.module";
import { IndexComponent } from './dodle/index/index.component';
import { LoginpageComponent } from './dodle/loginpage/loginpage.component';
import {CollapseModule, TooltipModule} from "ngx-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent
    // DemoIndexComponent,
    // DemoProfilepageComponent,
    // DemoRegisterpageComponent,
    // DemoLandingpageComponent
  ],
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        AppRoutingModule,
        // BsDropdownModule.forRoot(),
        // ProgressbarModule.forRoot(),
        // TooltipModule.forRoot(),
        // CollapseModule.forRoot(),
        // TabsModule.forRoot(),
        PagesModule,
        CollapseModule,
        TooltipModule,
        // PaginationModule.forRoot(),
        // AlertModule.forRoot(),
        // BsDatepickerModule.forRoot(),
        // CarouselModule.forRoot(),
        // ModalModule.forRoot()
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
