import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of} from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = [];

  private usersEndpoint: string = 'http://localhost:3000/users/';
	private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.usersEndpoint, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  addUser(firstName, lastName, email) {
    this.users.push(new User(firstName, lastName, email));
    return this.users;
  }
}