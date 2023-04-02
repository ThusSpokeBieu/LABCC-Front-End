import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Collection } from '../models/collection/collection.model';
import { Observable } from 'rxjs';
import { newCollectionDto } from '../models/collection/collection-new.dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly url = 'http://localhost:3000';
  private readonly urlPath = '/collections';
  private readonly endpoint = this.url + this.urlPath;

  constructor(private http: HttpClient) {}

  getUserByEmail(email: string): Observable<Collection[]> {
    return this.http.get<Collection[]>(`${this.endpoint}?email=${email}`);
  }

  getUsers(): Observable<Collection[]> {
    return this.http.get<Collection[]>(`${this.endpoint}`);
  }

  registerNewUser(newCollection: newCollectionDto) {
    const collection = new Collection(newCollection);
    return this.http.post(this.endpoint, collection);
  }

  updateUser(collectionId: number, inputData: Partial<Collection>) {
    return this.http.put(`${this.endpoint}/${collectionId}`, inputData);
  }
}
