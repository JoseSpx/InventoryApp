import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL_SERVICE = 'auth';
  constructor(private http: HttpClient) { }

  login(credentials: User) {
    return this.http.post(`${environment.URL}${this.URL_SERVICE}/login`, credentials);
  }

  islogged(): boolean {
    return !!localStorage.getItem('token');
  }

}
