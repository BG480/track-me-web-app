import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasicUsersService } from 'src/app/services/basic-users.service';
import { Location } from '@angular/common';
import { BasicUser } from 'src/app/models/basic-user';


@Component({
  selector: 'app-basic-user-details',
  templateUrl: './basic-user-details.component.html',
  styleUrls: ['./basic-user-details.component.css']
})
export class BasicUserDetailsComponent implements OnInit {

  basicUser: BasicUser;

  constructor(private route: ActivatedRoute,
    private basicUsersService: BasicUsersService,
    private location: Location) { }

  ngOnInit() {
    this.getBasicUserDetails();
  }

  private getBasicUserDetails(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.basicUsersService.getBasicUserDetails(id).subscribe(basicUser => this.basicUser = basicUser);

  }

  private goBack(): void{
    this.location.back();
  }

}
