import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Collection } from 'src/app/models/collection/collection.model';
import { ModelsTypes } from 'src/app/models/model/model-type.enum';
import { ModelDto } from 'src/app/models/model/model.dto';
import { Model } from 'src/app/models/model/model.model';
import { CollectionService } from 'src/app/services/collection.service';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-models-register',
  templateUrl: './models-register.component.html',
  styleUrls: ['./models-register.component.scss'],
})
export class ModelsRegisterComponent {
  newModelForm!: FormGroup;
  modelTypes: string[] = ModelsTypes;
  collections: Collection[] = [];

  constructor(
    private readonly toastr: ToastrService,
    private readonly modelService: ModelService,
    private readonly collectionService: CollectionService,
    private readonly router: Router
  ) {
    this.collectionService.getAllCollections().subscribe((collections) => {
      this.collections = collections;
    });
  }

  ngOnInit() {
    console.log(this.collections);
    this.newModelForm = new FormGroup({
      modelName: new FormControl('', Validators.required),
      collection: new FormControl('', Validators.required),
      hasEmbroidery: new FormControl('', Validators.required),
      modelType: new FormControl('', Validators.required),
      responsible: new FormControl('', Validators.required),
      hasPrint: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    console.log(this.newModelForm.value);
    if (this.newModelForm.valid) {
      const model: ModelDto = this.newModelForm.value;
      this.modelService.registerNewModel(model).subscribe((data) => {
        console.log(data);
        this.addModelToCollection(data as Model);
      });
      this.toastr.success(`Modelo criado com sucesso!`);
    } else {
      this.toastr.error(`Por favor, insira todos os campos corretamente.`);
    }
  }

  addModelToCollection(model: Model) {
    const collectionName = model.collection;
    this.collectionService
      .getCollectionByName(collectionName)
      .subscribe((collections) => {
        const newQuantity = collections[0].quantityModels + 1;
        const { id } = collections[0];
        this.collectionService
          .updateCollection(id, { quantityModels: newQuantity })
          .subscribe();
      });
  }
}
