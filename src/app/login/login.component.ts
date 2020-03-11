import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  submitted: boolean;
  returnUrl: string;
  constructor(public router: Router, private route: ActivatedRoute) {}
  password = "nuke@stag0901#";
  ngOnInit() {}
  userform = new FormGroup({
    username: new FormControl("", Validators.required),
    pswd: new FormControl("", Validators.required)
  });
  get f() {
    return this.userform.controls;
  }
  done() {
    this.submitted = true;
    if (this.userform.invalid) {
      return;
    } else {
      if (
        this.userform.value.username == "maximl" &&
        this.userform.value.pswd == "m@123"
      ) {
        localStorage.setItem("username", "maximl");
        this.router.navigate(["mainpage"]);
      } else {
        alert("invalid username and password");
        this.userform.reset();
        this.submitted = false;
      }
    }
  }
}
