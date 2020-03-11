import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaincompComponent } from "./maincomp/maincomp.component";
import { CreatecompComponent } from "./createcomp/createcomp.component";
import { ViewcompComponent } from "./viewcomp/viewcomp.component";
import { SerchPipe } from "./serch.pipe";
import { LoginComponent } from "./login/login.component";
import { MynotificationComponent } from "./mynotification/mynotification.component";
import { UsertaskComponent } from "./usertask/usertask.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    MaincompComponent,
    CreatecompComponent,
    ViewcompComponent,
    SerchPipe,
    LoginComponent,
    MynotificationComponent,
    UsertaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
