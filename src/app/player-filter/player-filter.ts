import {ChangeDetectionStrategy, Component, Signal} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlayerFilterService, SortStat } from '../service/player-filter.service';
import { getStatDescription } from '../models/stat-definitions';


@Component({
  selector: 'app-player-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './player-filter.html',
  styleUrls: ['./player-filter.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PlayerFilterComponent {
  readonly searchQuery: Signal<string>;
  readonly selectedSort: Signal<SortStat | null>;
  readonly minValue: Signal<number | null>;
  readonly maxValue: Signal<number | null>;
  readonly getStatDescription = getStatDescription;

  constructor(
    private readonly playerFilterService: PlayerFilterService
  ) {
    this.searchQuery = this.playerFilterService.searchQuery;
    this.selectedSort = this.playerFilterService.selectedSort;
    this.minValue = this.playerFilterService.minValue;
    this.maxValue = this.playerFilterService.maxValue;
  }

  searchChanged(value: string): void {
    this.playerFilterService.searchChanged(value);
  }

  sortBy(stat: SortStat): void {
    this.playerFilterService.sortBy(stat);
  }

  minChanged(value: number | null): void {
    this.playerFilterService.minChanged(value);
  }
  maxChanged(value: number | null): void {
    this.playerFilterService.maxChanged(value);
  }

  showAllPlayers(): void {
    this.playerFilterService.showAllPlayers();
  }
}
