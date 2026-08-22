import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user';

@Component({
  selector: 'app-users-list',
  standalone: true,
  templateUrl: './users-list.html',
  styleUrl: './users-list.css'
})
export class UsersList implements OnInit {
  users: User[] = [];
  loading = true;
  error = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Ошибка загрузки пользователей:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }
}
