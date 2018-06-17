import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'api/users';

  constructor(private http: HttpClient) { }

  private handleError<U>(operation = 'operation', result?: U) {
    return (error: any): Observable<U> => {
      return of(result as U);
    };
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      catchError(this.handleError('getUsers', []))
    );
  }

  getUser(id: number): Observable<User> {
    console.log("!!!");
    const url = this.usersUrl + '/' + id;
    return this.http.get<User>(url).pipe(
     catchError(this.handleError<User>('getUser id='+id))
    );
  }
}
