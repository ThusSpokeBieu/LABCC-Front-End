import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Collection } from 'src/app/models/collection/collection.model';
import { ModelsTypes } from 'src/app/models/model/model-type.enum';
import { Model } from 'src/app/models/model/model.model';
import { CollectionService } from 'src/app/services/collection.service';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-models-edit',
  templateUrl: './models-edit.component.html',
  styleUrls: ['./models-edit.component.scss'],
})
export class ModelsEditComponent {
  editModelForm!: FormGroup;
  modelId!: string | null;
  collections: Collection[] = [];
  modelTypes: string[] = ModelsTypes;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly toastr: ToastrService,
    private readonly collectionService: CollectionService,
    private readonly modelService: ModelService,
    private readonly router: Router
  ) {
    this.collectionService.getAllCollections().subscribe((collections) => {
      console.log(collections);
      this.collections = collections;
    });
  }

  ngOnInit() {
    this.modelId = this.route.snapshot.paramMap.get('id');

    if (!this.modelId) {
      this.toastr.error(`Modelo não foi encontrado.`);
      this.router.navigate(['../models-list']);
    }

    const id = parseInt(this.modelId as string);

    this.editModelForm = new FormGroup({
      modelName: new FormControl('', Validators.required),
      collection: new FormControl('', Validators.required),
      hasEmbroidery: new FormControl('', Validators.required),
      modelType: new FormControl('', Validators.required),
      responsible: new FormControl('', Validators.required),
      hasPrint: new FormControl('', Validators.required),
    });

    this.modelService.getModelById(id).subscribe((models) => {
      this.editModelForm.patchValue(models[0]);
    });
  }

  onSubmit() {
    const model = this.editModelForm.value;
    model.updatedAt = new Date();
    const id = parseInt(this.modelId as string);
    this.modelService.updateModel(id, model).subscribe();
    this.toastr.success(`Modelo atualizado com sucesso!`);
  }

  onDeleteClick() {
    const id = parseInt(this.modelId as string);
    this.modelService.deleteCollection(id).subscribe((model) => {
      this.removeModelFromCollection(model as Model);
    });
    this.toastr.success(`Modelo excluído com sucesso`);
  }

  removeModelFromCollection(model: Model) {
    const collectionName = model.collection;
    this.collectionService
      .getCollectionByName(collectionName)
      .subscribe((collections) => {
        const newQuantity = collections[0].quantityModels - 1;
        const { id } = collections[0];
        this.collectionService
          .updateCollection(id, { quantityModels: newQuantity })
          .subscribe();
      });
  }
}
