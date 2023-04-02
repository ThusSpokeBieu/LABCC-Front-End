import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user/user.model';
import { Observable } from 'rxjs';
import { UserRegisterDto } from '../models/user/user-register.dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly url = 'http://localhost:3000';
  private readonly urlPath = '/users';
  private readonly endpoint = this.url + this.urlPath;

  constructor(private http: HttpClient) {}

  getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.endpoint}?email=${email}`);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.endpoint}`);
  }

  registerNewUser(newUser: UserRegisterDto) {
    const user = new User(newUser);
    return this.http.post(this.endpoint, user);
  }

  updateUser(userId: number, inputData: Partial<User>) {
    return this.http.put(`${this.endpoint}/${userId}`, inputData);
  }
}
