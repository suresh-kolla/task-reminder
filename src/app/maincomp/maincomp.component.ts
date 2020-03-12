import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../authentication.service";

@Component({
  selector: "app-maincomp",
  templateUrl: "./maincomp.component.html",
  styleUrls: ["./maincomp.component.css"]
})
export class MaincompComponent implements OnInit {
  constructor(public authenticationService: AuthenticationService) {}

  ngOnInit() {}
  logout() {
    this.authenticationService.logout();
  }
}
