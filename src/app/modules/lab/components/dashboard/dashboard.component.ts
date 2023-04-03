import { Component } from '@angular/core';
import { Collection } from 'src/app/models/collection/collection.model';
import { CollectionService } from 'src/app/services/collection.service';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  collections!: number;
  models!: number;
  averageBudget!: number;
  biggerBudgets: Collection[] = [];

  constructor(
    private readonly collectionService: CollectionService,
    private readonly modelService: ModelService
  ) {}

  ngOnInit() {
    this.getCollections();
    this.getModels();
  }

  getCollections() {
    this.collectionService.getAllCollections().subscribe((collections) => {
      this.collections = collections.length;
      this.averageBudget = this.getAverageBudget(collections);
      this.biggerBudgets = this.getBigFive(collections);
    });
  }

  getModels() {
    this.modelService
      .getAllModels()
      .subscribe((models) => (this.models = models.length));
  }

  getAverageBudget(collections: Collection[]) {
    const totalBudget = collections.reduce(
      (sum, collection) => sum + collection.budget,
      0
    );
    const averageBudget = totalBudget / collections.length;

    return averageBudget;
  }

  getBigFive(collections: Collection[]) {
    const ranking = collections.sort((a, b) => b.budget - a.budget);
    const bigFive = ranking.slice(0, 5);

    return bigFive;
  }
}
