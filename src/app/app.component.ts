import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'schollapp';

  items: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {
        routerLink: 'tasks',
        label: 'Tasks',
        items: [
          {
            routerLink: 'tasks/list',
            label: 'New',
            items: [
              {
                routerLink: 'tasks/create',
                label: 'Master Data 1'
              }
            ]
          }
        ]
      },
      {
        label: 'Users',
        routerLink: 'users',
        items: [
          {
            routerLink: 'students/list',
            label: 'New',
          },
          {
            routerLink: 'students/create',
            label: 'Create',
          }
        ]
      }
    ];
  }
}
