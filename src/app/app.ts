import { Component } from '@angular/core';
import {HeaderComponent} from './header-component/header-component';
import {UsersList} from './users-list/users-list';

@Component({
  selector: 'app-root',
  imports: [ HeaderComponent, UsersList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
