import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../../store';
import { AuthService } from './../auth.service';
import { UsersActions } from '../../store/users/users.actions';
// import 'ng2-swipe-cards';

@Component ({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  authenticated = false;
  username: string = null;

  constructor (
    private ngRedux: NgRedux<IAppState>,
    private router: Router,
    private usersActions: UsersActions,
    private authService: AuthService
  ) {}

  ngOnInit () {
    this.ngRedux
      .select(state => state.users)
      .subscribe(users => {
        this.authenticated = users.userAuthenticated;
        this.username = users.username;
      });
  }

  logout () {
    this.usersActions.logout();
    this.authService.deauthenticateUser();
    this.authService.removeUser();

    this.router.navigateByUrl('');
  }
}
