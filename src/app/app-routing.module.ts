import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MaincompComponent } from "./maincomp/maincomp.component";
import { CreatecompComponent } from "./createcomp/createcomp.component";
import { ViewcompComponent } from "./viewcomp/viewcomp.component";
import { UsertaskComponent } from "./usertask/usertask.component";
import { MynotificationComponent } from "./mynotification/mynotification.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "mainpage",
    component: MaincompComponent,
    children: [
      { path: "", component: CreatecompComponent },
      { path: "create", component: CreatecompComponent },
      { path: "view", component: ViewcompComponent },
      { path: "userview", component: UsertaskComponent },
      { path: "mynotification", component: MynotificationComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
