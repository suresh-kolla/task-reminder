import { Component, OnInit } from "@angular/core";
import { ServiceService } from "../service.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-usertask",
  templateUrl: "./usertask.component.html",
  styleUrls: ["./usertask.component.css"]
})
export class UsertaskComponent implements OnInit {
  data;
  key;
  flag1;
  constructor(public service: ServiceService, public fb: FormBuilder) {}

  ngOnInit() {
    this.data = this.service.task;
  }
  remove(i) {
    this.service.delete(i);
  }

  oppoSuitsForm = this.fb.group({
    name: [""]
  });
}
