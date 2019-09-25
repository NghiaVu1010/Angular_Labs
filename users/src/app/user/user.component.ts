import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from './user.model';
import { UsersService } from '../providers/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  sub: any;
  userName: string = '';

  users: any[] = [];

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.sub = this.route
               .queryParams
               .subscribe(params => {
                  this.userName = params['username'];
                });

    this.users = this.usersService.getUsers();
  }

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

  // executed when Add User is clicked
  onAddNewUser(): void {
    this.users = this.usersService.addUser(this.firstName, this.lastName, this.emailInput);
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

  onLogout() {
    this.router.navigate(['/']);
  }

  getColor(): string {
    return this.newUserAdded === true ? '#000080' : '#FF0000'; // navy : red
  }
}