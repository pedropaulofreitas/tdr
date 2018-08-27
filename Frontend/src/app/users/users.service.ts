import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service';

@Injectable()
export class UsersService {
  constructor(private httpService: HttpService) {}

  register (user) {
    return this.httpService.post('auth/register', user);
  }

  getProfile (id?) {
    if (id) {
      return this.httpService.get(`users/profile/${id}`);
    } else {
      return this.httpService.get(`users/profile`);
    }
  }

  editProfile (user) {
    return this.httpService.post('users/profile', user);
  }

  login (user) {
    return this.httpService.post('auth/login', user);
  }

  list (query?) {
    return this.httpService.get(`users/list${query}`);
  }

  like (id) {
    return this.httpService.post(`matches/like/${id}`, {});
  }

  dislike (id) {
    return this.httpService.post(`matches/unlike/${id}`, {});
  }
}
