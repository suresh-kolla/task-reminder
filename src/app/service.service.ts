import { Injectable } from "@angular/core";
import _ from "lodash";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class ServiceService {
  constructor(public router: Router) {}
  url;
  navigate() {
    this.url = localStorage.getItem("currentUser");
    if (this.url == null) {
      this.router.navigate(["/"]);
    }
  }
  task = [
    {
      titlename: "satya kolla",
      task: "going to gym",
      rdatetime: "2020-04-09T07:02"
    },
    {
      titlename: "john smith",
      task: "meeting her friend",
      rdatetime: "2020-05-27T12:02"
    },
    {
      titlename: "maximl",
      task: "seminar time",
      rdatetime: "2020-03-23T08:02"
    },
    {
      titlename: "maximl",
      task: "teamout ",
      rdatetime: "2020-03-13T12:02"
    },
    {
      titlename: "david",
      task: "playing cricket",
      rdatetime: "2020-03-17T22:02"
    }
  ];
  add(x) {
    this.task.push(x);
  }
  delete(i) {
    this.task.splice(i, 1);
  }
}
