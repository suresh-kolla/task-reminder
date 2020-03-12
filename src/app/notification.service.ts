import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthenticationService } from "./authentication.service";
import { Notification } from "./notification";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class NotificationService {
  private notificationsUrl =
    "http://127.0.0.1:8000/taskReminderApp/notifications/";
  private userCredentialUrl =
    "http://127.0.0.1:8000/taskReminderApp/user_credential/?token=";
  currentUser = this.authenticationService.currentUserValue;
  notification: Notification;
  public user;

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {}

  get_user() {
    return this.http.get(this.userCredentialUrl + this.currentUser.token);
  }
  getNotifications(): Observable<Notification[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Token " + this.currentUser.token
      })
    };
    return this.http.get<Notification[]>(this.notificationsUrl, httpOptions);
  }
}
