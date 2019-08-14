import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin';
import { AdminsService } from 'src/app/services/admins.service';

@Component({
  selector: 'app-admins-list',
  templateUrl: './admins-list.component.html',
  styleUrls: ['./admins-list.component.css']
})
export class AdminsListComponent implements OnInit {

  admins: Admin[];

  constructor(private adminsService: AdminsService) { }

  ngOnInit() {
    this.getAdmins();
  }

  public getAdmins(): void{
    this.adminsService.getAdmins()
    .subscribe(admins => this.admins = admins);
  }

}
