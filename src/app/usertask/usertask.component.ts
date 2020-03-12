import { Component, OnInit } from "@angular/core";
import { ServiceService } from "../service.service";
import { CreatTaskService } from "../creat-task.service";

@Component({
  selector: "app-usertask",
  templateUrl: "./usertask.component.html",
  styleUrls: ["./usertask.component.css"]
})
export class UsertaskComponent implements OnInit {
  data;
  key;
  flag1;
  constructor(
    public service: ServiceService,
    private tasksService: CreatTaskService
  ) {}

  ngOnInit() {
    this.service.navigate();
  }
  getAssignedUserID(data) {
    // console.log("Data "+data)
    this.tasksService
      .getUserTasks(data)
      .subscribe(tasks => (this.data = tasks));
  }
}
