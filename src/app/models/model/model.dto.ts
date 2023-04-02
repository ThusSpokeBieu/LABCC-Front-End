import { MODEL_TYPE } from './model-type.enum';

export interface ModelDto {
  modelName: string;
  collection: string;
  hasEmbroidery: boolean;
  modelType: MODEL_TYPE;
  responsible: string;
  hasPrint: boolean;
}
