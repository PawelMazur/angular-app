import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from './user';
import { USERS } from './tmp-users-list';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(USERS);
  }

  getUser(id: number): Observable<User> {
    return of(USERS.find(user => user.id === id));
  }

  getUsersByName(name: string): Observable<User[]> {
    return of(USERS.filter(user => user.name === name));
  }

  getUsersBySurname(surname: string): Observable<User[]> {
    return of(USERS.filter(user => user.surname === surname));
  }

}
