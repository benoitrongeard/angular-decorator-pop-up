import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { confirmationPopUp } from './decorators/confirm-pop-up.decorator';

export interface User {
  id: number,
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

const USERS: User[] = [
  { id: 1, firstName: "Alice", lastName: "Smith", age: 25, email: "alice.smith@example.com" },
  { id: 2, firstName: "Bob", lastName: "Johnson", age: 30, email: "bob.johnson@example.com" },
  { id: 3, firstName: "Charlie", lastName: "Brown", age: 40, email: "charlie.brown@example.com" },
  { id: 4, firstName: "David", lastName: "Lee", age: 20, email: "david.lee@example.com" },
  { id: 5, firstName: "Emily", lastName: "Wang", age: 27, email: "emily.wang@example.com", }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'age', 'delete'];
  dataSource = USERS;

  @confirmationPopUp({ title: 'Confirmation', message: 'Are you sure to delete this user ?' })
  deleteUser(element: User) {
    this.dataSource = this.dataSource.filter(user => user.id != element.id);
  }

  reloadData() {
    this.dataSource = USERS;
  }
}
