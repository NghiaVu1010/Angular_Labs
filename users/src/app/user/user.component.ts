import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  users: User[] = [
    new User("Neo", "Vu", "neo@test.com"),
    new User("Sara", "Chandy", "sara@test.com"),
    new User("Cate", "Speakeman", "cate@test.com")
  ];

  firstName: string = "Foo";
  lastName: string = "Bar";
  emailInput: string = "foobar@test.com";
  newUser: string = "";
  currentYear: number = 2019;

  newUserAdded: boolean = false;
  addNewUser: boolean = false;

  getCurrentYear(): number {
    return this.currentYear;
  }

  // executed when Add Mountain is clicked
  onAddNewUser(): void {
    let obj = {"firstName": this.firstName, "lastName": this.lastName, "email": this.emailInput};
    this.users.push(obj);
    this.addNewUser = true;
    this.newUserAdded = true;
  }

  // executed when the Reset button is clicked
  onReset(): void {
    this.firstName = '';
    this.lastName = '';
    this.emailInput = '';
    //this.addNewUser = false;
    //this.newUserAdded = false;
  }

  getColor(): string {
    return this.newUserAdded === true ? '#000080' : '#FF0000'; // navy : red
  }
}