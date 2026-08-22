import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {

    const savedUsers = localStorage.getItem('users');

    if (savedUsers) {
      return of(JSON.parse(savedUsers) as User[]);
    }

    return this.http
      .get<any>('https://randomuser.me/api/?results=30')
      .pipe(
        map((data) => {
          const users: User[] = data.results.map((user: any) => ({
            firstName: user.name.first,
            lastName: user.name.last,
            age: user.dob.age,
            address: `${user.location.street.number} ${user.location.street.name}, ${user.location.city}`,
            email: user.email,
            picture: user.picture.large
          }));

          localStorage.setItem('users', JSON.stringify(users));

          return users;
        })
      );
  }
}
