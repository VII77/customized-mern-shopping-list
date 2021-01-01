import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Role } from 'src/app/enums/role';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {
  public users: any;
  public dataSource = new MatTableDataSource<any>([]);

  public get Role(): typeof Role {
    return Role;
  }

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      this.dataSource.data = users;
    });
  }

  public assignAdmin(user: User): void {
    this.userService.assignRole(user, Role.Admin).subscribe(u => this.assignRoleCallback(user, u));
  }

  public assignUser(user: User): void {
    this.userService.assignRole(user, Role.User).subscribe(u => this.assignRoleCallback(user, u));
  }

  private assignRoleCallback(user: User, newUser: User): void {
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1, newUser);
      this.dataSource.data = this.users;
    }
  }

}
