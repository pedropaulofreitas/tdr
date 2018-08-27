import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersService } from './users.service';
import { UsersActions } from '../store/users/users.actions';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UpdateProfileComponent } from './profile/update/update-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './profile/list/list.component';
import {
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule
} from '@angular/material';

@NgModule ({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    RouterModule
  ],
  declarations: [
    RegisterComponent,
    LoginComponent,
    ListComponent,
    ProfileComponent,
    UpdateProfileComponent
  ],
  providers: [
    UsersService,
    UsersActions
  ],
})

export class UsersModule {

}
