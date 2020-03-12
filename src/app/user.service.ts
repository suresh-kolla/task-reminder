import { Injectable } from "@angular/core";
import { User } from "./user";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private usersUrl = "http://127.0.0.1:8000/taskReminderApp/users_list/";
  constructor(private http: HttpClient) {}
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
}
