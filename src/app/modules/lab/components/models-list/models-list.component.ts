import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Model } from 'src/app/models/model/model.model';
import { ModelService } from 'src/app/services/model.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-models-list',
  templateUrl: './models-list.component.html',
  styleUrls: ['./models-list.component.scss'],
})
export class ModelsListComponent {
  models: Model[] = [];
  columnsDisplay: string[] = [
    'modelId',
    'modelName',
    'responsible',
    'collection',
  ];

  constructor(
    private readonly modelService: ModelService,
    private readonly toastr: ToastrService,
    private readonly router: Router
  ) {
    this.getModels();
  }

  ngOnChanges() {
    this.getModels();
  }

  redirectToModel(id: number) {
    console.log(id);
    this.router.navigateByUrl(`/lab/models/edit/${id}`, {
      skipLocationChange: true,
      replaceUrl: true,
    });
  }

  getModels() {
    this.modelService
      .getAllModels()
      .subscribe((models) => (this.models = models));
  }
}
