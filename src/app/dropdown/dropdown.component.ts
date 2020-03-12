import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { User } from "../user";
import { UserService } from "../user.service";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.css"]
})
export class DropdownComponent implements OnInit {
  users: User[];
  getUsers(): void {
    this.usersService.getUsers().subscribe(users => (this.users = users));
  }

  @Output() updateSelectUser = new EventEmitter();

  constructor(private usersService: UserService) {}

  // selectItem(value) {
  //   this.updateSelectUser.emit(value);
  // }

  ngOnInit() {
    this.getUsers();
  }

  selectUser(user) {
    console.log("User ID: " + user);
    this.updateSelectUser.emit(user);
  }
}
