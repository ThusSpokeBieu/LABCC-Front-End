import { STATIONS } from './station.enum';

export interface newCollectionDto {
  collectionName: string;
  responsible: string;
  season: STATIONS;
  brand: string;
  budget: number;
  releaseYear: number;
}
