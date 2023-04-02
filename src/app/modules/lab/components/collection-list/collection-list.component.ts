import { Component } from '@angular/core';
import { CollectionService } from 'src/app/services/collection.service';
import { ToastrService } from 'ngx-toastr';
import { Collection } from 'src/app/models/collection/collection.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.scss'],
})
export class CollectionListComponent {
  collections: Collection[] = [];
  columnsDisplay: string[] = [
    'collectionName',
    'responsible',
    'season',
    'releaseYear',
    'models',
    'budget',
  ];

  constructor(
    private readonly collectionService: CollectionService,
    private readonly toastr: ToastrService,
    private readonly router: Router
  ) {
    this.getCollections();
  }

  redirectToCollection(id: number) {
    console.log(id);
    this.router.navigateByUrl(`/lab/collections/edit/${id}`, {
      skipLocationChange: true,
      replaceUrl: true,
    });
  }

  getCollections() {
    this.collectionService
      .getAllCollections()
      .subscribe((collections) => (this.collections = collections));
  }
}
