import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UserListComponent} from './components/user-list/user-list.component';
import {PanelModule} from 'primeng/panel';
import {InputTextModule, PasswordModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
