import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { first } from "rxjs/operators";
import { AuthenticationService } from "../authentication.service";
import { TypeofExpr } from "@angular/compiler";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  submitted: boolean;
  returnUrl: string;

  constructor(
    public router: Router,
    public authenticationService: AuthenticationService
  ) {}
  ngOnInit() {}
  userform = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });
  get f() {
    return this.userform.controls;
  }
  done() {
    this.submitted = true;
    if (this.userform.invalid) {
      return;
    } else {
      this.authenticationService
        .login(this.userform.value["username"], this.userform.value["password"])
        .subscribe(data => {
          this.router.navigate(["mainpage"]);
        });
    }
  }
}
