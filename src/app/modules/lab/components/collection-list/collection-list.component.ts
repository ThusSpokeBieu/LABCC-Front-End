import { Component } from '@angular/core';
import { CollectionDto } from 'src/app/models/collection/collection.dto';
import { CollectionService } from 'src/app/services/collection.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.scss'],
})
export class CollectionListComponent {
  collections: CollectionDto[] = [];
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
    private readonly toastr: ToastrService
  ) {
    this.getCollections();
  }

  getCollections() {
    this.collectionService
      .getAllCollections()
      .subscribe((collections) => (this.collections = collections));
  }
}
