import { Component, OnInit } from "@angular/core";
import { ServiceService } from "../service.service";
import { CreatTaskService } from "../creat-task.service";

@Component({
  selector: "app-viewcomp",
  templateUrl: "./viewcomp.component.html",
  styleUrls: ["./viewcomp.component.css"]
})
export class ViewcompComponent implements OnInit {
  data = [];
  flag = false;
  constructor(
    public service: ServiceService,
    private creattask: CreatTaskService
  ) {}
  get() {
    this.creattask.getAllTask().subscribe(res => {
      this.data = res;
      this.flag = true;
    });
  }
  ngOnInit() {
    this.service.navigate();
    this.get();
  }
}
