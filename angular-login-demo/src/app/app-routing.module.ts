import { TestComponent } from "./test/test.component";
import { TeacherComponent } from "./teacher/teacher.component";
import { AdminpageComponent } from "./adminpage/adminpage.component";
import { AppheaderComponent } from "./appheader/appheader.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { AdminComponent } from "./admin/admin.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "login", component: LoginComponent },
  { path: "app-header", component: AppheaderComponent },
  { path: "teacher", component: TeacherComponent },
  { path: "test", component: TestComponent },
  { path: "admin-page", component: AdminpageComponent },
  { path: "admin", component: AdminComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
