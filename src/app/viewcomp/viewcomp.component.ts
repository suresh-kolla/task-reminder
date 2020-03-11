import { Component, OnInit } from "@angular/core";
import { ServiceService } from "../service.service";

@Component({
  selector: "app-viewcomp",
  templateUrl: "./viewcomp.component.html",
  styleUrls: ["./viewcomp.component.css"]
})
export class ViewcompComponent implements OnInit {
  data;
  key;
  flag1;
  constructor(public service: ServiceService) {}

  ngOnInit() {
    this.data = this.service.task;
    if (this.data != "") {
      this.flag1 = true;
    } else {
      this.flag1 = false;
    }
  }
  remove(i) {
    this.service.delete(i);
    if (this.data == "") {
      this.flag1 = false;
    }
  }
}
