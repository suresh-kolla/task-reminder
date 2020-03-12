import { Component, OnInit } from "@angular/core";
import { ServiceService } from "../service.service";
import { NotificationService } from "../notification.service";
import { Notification } from "../notification";
@Component({
  selector: "app-mynotification",
  templateUrl: "./mynotification.component.html",
  styleUrls: ["./mynotification.component.css"]
})
export class MynotificationComponent implements OnInit {
  private notifications: Notification[];

  socketConnect() {
    const gn = this;
    const ws = new WebSocket(
      "ws://localhost:8000/ws/foobar?subscribe-broadcast&publish-broadcast&echo"
    );
    ws.onopen = function() {
      console.log("websocket connected");
    };
    ws.onmessage = function(e) {
      console.log("Received: " + e.data);
      gn.getNotifications();
    };
    ws.onerror = function(e) {
      console.error(e);
    };
    ws.onclose = function() {
      console.log("connection closed");
    };
  }

  constructor(
    public notificationService: NotificationService,
    private service: ServiceService
  ) {}

  ngOnInit() {
    this.service.navigate();
    this.socketConnect();
    this.getNotifications();
  }

  getNotifications(): void {
    this.notificationService
      .getNotifications()
      .subscribe(notifications => (this.notifications = notifications));
  }
}
