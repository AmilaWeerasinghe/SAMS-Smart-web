import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from "./admin/admin.component";
import { AppheaderComponent } from "./appheader/appheader.component";
import { AppmenuComponent } from "./appmenu/appmenu.component";
import { BoardComponent } from "./board/board.component";
import { FooterComponent } from "./footer/footer.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AdminpageComponent } from "./adminpage/adminpage.component";
import { TeacherComponent } from "./teacher/teacher.component";
import { TestComponent } from './test/test.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    AppheaderComponent,
    AppmenuComponent,
    BoardComponent,
    FooterComponent,
    DashboardComponent,
    AdminpageComponent,
    TeacherComponent,
    TestComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
