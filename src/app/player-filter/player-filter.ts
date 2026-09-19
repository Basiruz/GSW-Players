import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppPostboyService } from '../postboy/app-postboy.service';
import { PlayersFilterChangedEvent } from '../models/events/players-filter-changed.event';
import { PlayerFilterService, SortStat } from '../service/player-filter.service';
import { getStatDescription } from '../models/stat-definitions';


@Component({
  selector: 'app-player-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './player-filter.html',
  styleUrls: ['./player-filter.css']
})

export class PlayerFilterComponent {
  readonly searchQuery;
  readonly selectedSort;
  readonly minValue;
  readonly maxValue;
  readonly getStatDescription = getStatDescription;

  constructor(
    private readonly postboy: AppPostboyService,
    private readonly playerFilterService: PlayerFilterService
  ) {
    this.searchQuery = this.playerFilterService.searchQuery;
    this.selectedSort = this.playerFilterService.selectedSort;
    this.minValue = this.playerFilterService.minValue;
    this.maxValue = this.playerFilterService.maxValue;
  }

  searchChanged(value: string): void {
    this.playerFilterService.searchChanged(value);
    this.sendFilterEvent();
  }

  sortBy(stat: SortStat): void {
    this.playerFilterService.sortBy(stat);
    this.sendFilterEvent();
  }

  minChanged(value: number | null): void {
    this.playerFilterService.minChanged(value);
    this.sendFilterEvent();
  }
  maxChanged(value: number | null): void {
    this.playerFilterService.maxChanged(value);
    this.sendFilterEvent();
  }

  showAllPlayers(): void {
    this.playerFilterService.showAllPlayers();
    this.sendFilterEvent();
  }
  private sendFilterEvent(): void {
    this.postboy.fire(
      new PlayersFilterChangedEvent(
        this.searchQuery(),
        this.selectedSort(),
        this.minValue(),
        this.maxValue(),
      )
    )
  }
}
