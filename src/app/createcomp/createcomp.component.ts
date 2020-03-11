import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ServiceService } from "../service.service";
@Component({
  selector: "app-createcomp",
  templateUrl: "./createcomp.component.html",
  styleUrls: ["./createcomp.component.css"]
})
export class CreatecompComponent implements OnInit {
  submitted: boolean;
  constructor(public service: ServiceService) {}

  ngOnInit() {}
  Taskform = new FormGroup({
    titlename: new FormControl("", Validators.required),
    task: new FormControl("", Validators.required),
    rdatetime: new FormControl("", Validators.required)
  });
  get f() {
    return this.Taskform.controls;
  }
  submit() {
    this.submitted = true;
    if (this.Taskform.invalid) {
      return;
    } else {
      this.service.add(this.Taskform.value);
      console.log(this.Taskform.value);
      this.Taskform.reset();
      this.submitted = false;
    }
  }
}
