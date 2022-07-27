import { Component, OnInit } from '@angular/core';
import { UserService } from '../_service/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  usersFromApi: any = [];
  currentPage = 1;
  constructor(private userservice: UserService) {}

  ngOnInit(): void {
    this.getAllUsers(1);
  }

  getAllUsers(page: number) {
    this.userservice.getAllUsers(page).subscribe((user) => {
      this.usersFromApi = user;
      this.currentPage = page;
      console.log(this.currentPage);
    });
  }
}
