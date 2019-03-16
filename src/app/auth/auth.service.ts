import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }

  isLoggedIn = false;

  redirectUrl: string;

  login() {
    return this.http.post('http://localhost:3000/auth/login', {
      'email': 'ajeesh@gmail.com',
      'password': 'asdasd'
    }).pipe(
      map(res => res['token'])
    ).subscribe(token => {
      localStorage.setItem('token', token);
    });
  }

  logout() {

  }
}
