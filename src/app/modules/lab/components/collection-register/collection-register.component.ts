import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CollectionDto } from 'src/app/models/collection/collection.dto';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-collection-register',
  templateUrl: './collection-register.component.html',
  styleUrls: ['./collection-register.component.scss'],
})
export class CollectionRegisterComponent {
  newCollectionForm!: FormGroup;

  constructor(
    private readonly toastr: ToastrService,
    private readonly collectionService: CollectionService
  ) {}

  ngOnInit() {
    this.newCollectionForm = new FormGroup({
      collectionName: new FormControl('', Validators.required),
      season: new FormControl('', Validators.required),
      budget: new FormControl('', Validators.required),
      responsible: new FormControl('', Validators.required),
      brand: new FormControl('', Validators.required),
      releaseYear: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.newCollectionForm.valid) {
      const collection: CollectionDto = this.newCollectionForm.value;
      this.collectionService.registerNewCollection(collection).subscribe();
    } else {
      this.toastr.error(`Por favor, insira todos os campos corretamente.`);
    }
  }
}
