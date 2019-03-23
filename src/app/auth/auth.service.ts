import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, filter, map, tap} from 'rxjs/operators';
import * as angularJWT from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }

  isLoggedIn = false;

  redirectUrl: string;

  login() {
    const jwtHelper = new angularJWT.JwtHelperService();
    const isExpired = jwtHelper.isTokenExpired(localStorage.getItem('token'));

    if (isExpired === false) {
      return of(true);
    }

    return this.http.post('http://localhost:3000/auth/login', {
      'email': 'ajeesh@gmail.com',
      'password': 'asdasd'
    }).pipe(
      map(res => res['token']),
      tap(token => {
        localStorage.setItem('token', token);
      }),
      map(token => !!token)
    );
  }

  logout() {

  }
}
