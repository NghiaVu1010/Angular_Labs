import { Injectable } from '@angular/core';
import { User } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  users: User[] = [
    // new User("Neo", "Vu", "neo@test.com"),
    // new User("Sara", "Chandy", "sara@test.com"),
    // new User("Cate", "Speakeman", "cate@test.com")
  ];

  getUsers(): Array<any> {
    return this.users;
  }

  addUser(firstName, lastName, email) {
    this.users.push(new User(firstName, lastName, email));
    return this.users;
  }
}
