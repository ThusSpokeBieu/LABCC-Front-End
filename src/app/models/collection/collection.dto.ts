import { STATIONS } from './station.enum';

export interface CollectionDto {
  collectionName: string;
  responsible: string;
  season: STATIONS;
  brand: string;
  budget: number;
  quantityModels: number;
  releaseYear: number;
}
