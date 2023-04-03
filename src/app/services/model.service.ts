import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelDto } from '../models/model/model.dto';
import { Model } from '../models/model/model.model';

@Injectable({
  providedIn: 'root',
})
export class ModelService {
  private readonly url = 'http://localhost:3000';
  private readonly urlPath = '/models';
  private readonly endpoint = this.url + this.urlPath;

  constructor(private readonly http: HttpClient) {}

  getModelById(id: number): Observable<Model[]> {
    return this.http.get<Model[]>(`${this.endpoint}?id=${id}`);
  }

  getModelByCollectionName(collection: string): Observable<Model[]> {
    return this.http.get<Model[]>(`${this.endpoint}?collection=${collection}`);
  }

  getAllModels(): Observable<Model[]> {
    return this.http.get<Model[]>(`${this.endpoint}`);
  }

  registerNewModel(newModel: ModelDto) {
    const model = new Model(newModel);
    return this.http.post(this.endpoint, model);
  }

  updateModel(modelId: number, inputData: Partial<Model>) {
    return this.http.patch(`${this.endpoint}/${modelId}`, inputData);
  }

  deleteCollection(modelId: number) {
    return this.http.delete(`${this.endpoint}/${modelId}`);
  }
}
