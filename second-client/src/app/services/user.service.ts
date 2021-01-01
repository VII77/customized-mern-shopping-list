import { Role } from './../enums/role';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http: HttpClient) { }

getUsers(): Observable<any> {
  return this.http.get<any>( 'http://localhost:5000/api/users/');
}

assignRole(user: User, role: Role): Observable<any> {
  return this.http.patch<any>('http://localhost:5000/api/users/' + user._id, {role});
}
}

