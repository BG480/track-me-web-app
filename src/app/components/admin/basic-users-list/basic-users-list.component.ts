import { Component, OnInit } from '@angular/core';
import { BasicUser } from 'src/app/models/basic-user';
import { BasicUsersService } from 'src/app/services/basic-users.service';

@Component({
  selector: 'app-basic-users-list',
  templateUrl: './basic-users-list.component.html',
  styleUrls: ['./basic-users-list.component.css']
})
export class BasicUsersListComponent implements OnInit {

  basicUsers: BasicUser[];

  constructor(private basicUsersService: BasicUsersService) { }

  ngOnInit() {
    this.getAllBasicUsers();
  }

  private getAllBasicUsers(): void{
    this.basicUsersService.getAllBasicUsers()
    .subscribe(basicUsers => this.basicUsers = basicUsers);
  }

}
