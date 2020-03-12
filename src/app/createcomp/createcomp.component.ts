import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ServiceService } from "../service.service";
import { CreatTaskService } from "../creat-task.service";
import { DropdownComponent } from "../dropdown/dropdown.component";
@Component({
  selector: "app-createcomp",
  templateUrl: "./createcomp.component.html",
  styleUrls: ["./createcomp.component.css"]
})
export class CreatecompComponent implements OnInit {
  submitted: boolean;
  constructor(
    public service: ServiceService,
    private createTaskservice: CreatTaskService
  ) {}

  ngOnInit() {
    this.service.navigate();
  }
  Taskform = new FormGroup({
    task_name: new FormControl("", Validators.required),
    task_description: new FormControl("", Validators.required),
    assigned_to: new FormControl("1", Validators.required),
    reminder_time: new FormControl("", Validators.required)
  });
  get f() {
    return this.Taskform.controls;
  }
  getAssignedUserID(data) {
    console.log("Data Create User " + data);
    this.Taskform.patchValue({ assigned_to: data });
  }
  submit() {
    this.submitted = true;
    if (this.Taskform.invalid) {
      return;
    } else {
      this.createTaskservice.postTask(this.Taskform.value).subscribe();
      this.Taskform.reset();
      this.submitted = false;
    }
  }
}
