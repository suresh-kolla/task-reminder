import { Injectable } from "@angular/core";
import { Task } from "./task";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthenticationService } from "./authentication.service";

@Injectable({
  providedIn: "root"
})
export class CreatTaskService {
  task: Task;
  currentUser = this.authenticationService.currentUserValue;

  private tasksUrl = "http://127.0.0.1:8000/taskReminderApp/tasks/";
  postTask(task: Task): Observable<Task[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Token " + this.currentUser.token
      })
    };
    return this.http.post<Task[]>(this.tasksUrl, task, httpOptions);
  }
  getAllTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl);
  }

  getUserTasks(id): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl + "?assigned_to=" + id);
  }
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {}
}
