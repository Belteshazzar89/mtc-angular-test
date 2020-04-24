import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../shared/user.model';
import { UserService } from '../shared/users.service';

@Component({
  selector: 'user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class UserListComponent implements OnInit {
  users: Observable<User[]>;

  ngOnInit(): void {}

  constructor(userService: UserService) {
    // Users are an Observable, there is no need to subscribe as the
    // 'async' pipe in the template continues to get results as they are sent
    this.users = userService.getUsers();
  }
}
