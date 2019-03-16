import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/users').subscribe(res => {
      this.users = res;
    });
  }

}
