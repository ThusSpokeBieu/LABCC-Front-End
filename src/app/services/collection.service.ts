import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Collection } from '../models/collection/collection.model';
import { Observable } from 'rxjs';
import { CollectionDto } from '../models/collection/collection.dto';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  private readonly url = 'http://localhost:3000';
  private readonly urlPath = '/collections';
  private readonly endpoint = this.url + this.urlPath;

  constructor(private http: HttpClient) {}

  getCollectionById(id: number): Observable<Collection[]> {
    return this.http.get<Collection[]>(`${this.endpoint}?id=${id}`);
  }

  getCollectionByName(name: string): Observable<Collection[]> {
    return this.http.get<Collection[]>(`${this.endpoint}?name=${name}`);
  }

  getAllCollections(): Observable<Collection[]> {
    return this.http.get<Collection[]>(`${this.endpoint}`);
  }

  registerNewCollection(newCollection: CollectionDto) {
    const collection = new Collection(newCollection);
    return this.http.post(this.endpoint, collection);
  }

  updateCollection(collectionId: number, inputData: Partial<Collection>) {
    return this.http.patch(`${this.endpoint}/${collectionId}`, inputData);
  }

  deleteCollection(collectionId: number) {
    return this.http.delete(`${this.endpoint}/${collectionId}`);
  }
}
