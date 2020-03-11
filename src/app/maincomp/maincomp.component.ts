import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-maincomp",
  templateUrl: "./maincomp.component.html",
  styleUrls: ["./maincomp.component.css"]
})
export class MaincompComponent implements OnInit {
  constructor(public route: Router) {}

  ngOnInit() {}
  logout() {
    localStorage.removeItem("username");
    this.route.navigate(["/"]);
  }
}
