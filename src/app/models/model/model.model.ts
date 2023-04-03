import { MODEL_TYPE } from './model-type.enum';
import { ModelDto } from './model.dto';

export class Model {
  id!: number;
  modelName!: string;
  collection!: string;
  hasEmbroidery!: boolean;
  modelType!: MODEL_TYPE;
  responsible!: string;
  hasPrint!: boolean;
  updatedAt!: Date;
  createdAt!: Date;

  constructor(model: ModelDto | null) {
    if (!!model) {
      this.modelName = model.modelName;
      this.collection = model.collection;
      this.hasEmbroidery = model.hasEmbroidery;
      this.modelType = model.modelType;
      this.responsible = model.responsible;
      this.hasPrint = model.hasPrint;
    }
    this.updatedAt = new Date();
    this.createdAt = new Date();
  }
}
