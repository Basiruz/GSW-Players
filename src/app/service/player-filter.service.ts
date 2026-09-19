import { Injectable, signal } from '@angular/core';
import { PlayerService } from './player.service';

export type SortStat = 'GP' | 'PTS' | 'MIN';

@Injectable({
  providedIn: 'root'
})

export class PlayerFilterService {
  readonly searchQuery = signal('');
  readonly selectedSort = signal<SortStat | null>(null);

  readonly minValue = signal<number | null>(null);
  readonly maxValue = signal<number | null>(null);

  constructor(
    private readonly playerService: PlayerService
  ) {}

  searchChanged(value: string): void {
    this.searchQuery.set(value);
    this.filterPlayers();
  }

  sortBy(stat: SortStat): void {
    this.selectedSort.set(stat);
    this.filterPlayers();
  }

  minChanged(value: number | null): void {
    this.minValue.set(value);
    this.filterPlayers();
  }
  maxChanged(value: number | null): void {
    this.maxValue.set(value);
    this.filterPlayers();
  }

  showAllPlayers(): void {
    this.searchQuery.set('');
    this.selectedSort.set(null);
    this.minValue.set(null);
    this.maxValue.set(null);
    this.filterPlayers();
  }

  private filterPlayers(): void {
    const query = this.searchQuery().toLowerCase().trim();

    let result = this.playerService
      .getAllPlayers()
      .filter(player => {
        const fullName = `${player.firstName} ${player.lastName}`.toLowerCase();

        return fullName.includes(query);
      });

    const sortBy = this.selectedSort();
    const min = this.minValue();
    const max = this.maxValue();

    if (sortBy) {
      result = result.filter(player => {
        const value = player.stats[sortBy];
        const aboveMin = min === null || value > min;
        const belowMax = max === null || value <= max;

        return aboveMin && belowMax;
      });


      result = [...result].sort(
        (a, b) => b.stats[sortBy] - a.stats[sortBy]
      );
    }

    this.playerService.setPlayers(result);
  }
}
