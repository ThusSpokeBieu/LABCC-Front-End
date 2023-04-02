import { Model } from '../model/model.model';
import { CollectionDto } from './collection.dto';
import { STATIONS } from './station.enum';

export class Collection {
  id!: number;
  collectionName!: string;
  responsible!: string;
  season!: STATIONS;
  brand!: string;
  budget!: number;
  releaseYear!: number;
  models: Model[] = [];
  quantityModels: number = 0;
  updatedAt!: Date;
  createdAt!: Date;

  constructor(collection: CollectionDto | null) {
    if (!!collection) {
      this.collectionName = collection?.collectionName;
      this.responsible = collection?.responsible;
      this.season = collection?.season;
      this.brand = collection?.brand;
      this.budget = collection?.budget;
      this.releaseYear = collection.releaseYear;
    }
    this.updatedAt = new Date();
    this.createdAt = new Date();
  }

  addModel(model: Model) {
    this.models.push(model);
    this.quantityModels += 1;
  }
}
