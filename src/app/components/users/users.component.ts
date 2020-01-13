import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { }

  public users: User[];

  ngOnInit(): void {
    this.getUsers();
  }


  getUsers(): void {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

}
