import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Add a User';

  firstName: string = "Foo";
  lastName: string = "Bar";
  emailInput: string = "foobar@test.com";
  newUser: string = "";
  currentYear: number = 2019;

  addNewUser: boolean = false;

  getCurrentYear(): number {
    return this.currentYear;
  }

  // executed when Add Mountain is clicked
  onAddNewUser(): void {
    this.newUser = `${this.firstName} ${this.lastName} - ${this.emailInput}`;
    this.addNewUser = true;
  }

  // executed when the Reset button is clicked
  onReset(): void {
    this.firstName = '';
    this.lastName = '';
    this.emailInput = '';
    this.addNewUser = false;
  }
}
