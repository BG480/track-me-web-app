import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicUser } from '../../models/basic-user.model';
import { BasicUserService } from '../../services/basic-user.service';

@Component({
  selector: 'app-basic-user-list',
  templateUrl: './basic-user-list.component.html',
  styleUrls: ['./basic-user-list.component.css']
})
export class BasicUserListComponent implements OnInit {

  basicUsers: BasicUser[];

  constructor(private basicUserService: BasicUserService,
    private router: Router) { }

  ngOnInit() {
    this.getBasicUsers();
  }

  getBasicUsers(): void {
    this.basicUserService.getBasicUsers().subscribe
    (
      (basicUsers: BasicUser[]) => {
        this.basicUsers = basicUsers;
      },
      (error: string) => {
        // this.toastr.error(err); TODO: wyświetlić powiadomienie z serwisu do powadomień
      }
    );
  }
}
