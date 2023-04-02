import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionService } from 'src/app/services/collection.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-collection-edit',
  templateUrl: './collection-edit.component.html',
  styleUrls: ['./collection-edit.component.scss'],
})
export class CollectionEditComponent {
  editCollectionForm!: FormGroup;
  collectionId!: string | null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly toastr: ToastrService,
    private readonly collectionService: CollectionService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.collectionId = this.route.snapshot.paramMap.get('id');

    if (!this.collectionId) {
      this.toastr.error(`Coleção não foi encontrada.`);
      this.router.navigate(['../collection-list']);
    }

    const id = parseInt(this.collectionId as string);

    this.editCollectionForm = new FormGroup({
      collectionName: new FormControl('', Validators.required),
      season: new FormControl('', Validators.required),
      budget: new FormControl('', Validators.required),
      responsible: new FormControl('', Validators.required),
      brand: new FormControl('', Validators.required),
      releaseYear: new FormControl('', Validators.required),
    });

    this.collectionService.getCollectionById(id).subscribe((collections) => {
      this.editCollectionForm.patchValue(collections[0]);
    });
  }

  onSubmit() {
    const collection = this.editCollectionForm.value;
    const id = parseInt(this.collectionId as string);
    this.collectionService
      .updateCollection(id, collection)
      .subscribe((data) => console.log(data));
  }
}
