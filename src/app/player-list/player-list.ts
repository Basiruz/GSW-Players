import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlayerCardComponent } from '../player-card/player-card';
import { PLAYERS } from '../models/player-data';
import { postboy } from '../postboy.instance';
import { PlayersFilterChangedEvent } from '../models/events/players-filter-changed.event';

@Component({
  selector: 'app-player-list',
  standalone: true,
  imports: [PlayerCardComponent, FormsModule],
  templateUrl: './player-list.html',
  styleUrls: ['./player-list.css']
})
export class PlayerListComponent {
  readonly players = PLAYERS;

  searchQuery = signal('');
  selectedSort = signal<'GP' | 'PTS' | 'MIN' | null>(null);

  filteredPlayers = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();

    let result = this.players.filter(player => {
      const fullName = `${player.firstName} ${player.lastName}`.toLowerCase();
      return fullName.includes(query);
    });

    const sort = this.selectedSort();

    if (sort) {
      result = [...result].sort((a, b) =>
        b.stats[sort] - a.stats[sort]
      );
    }

    return result;
  });

  constructor() {
    effect(() => {
      postboy.fire(new PlayersFilterChangedEvent(this.searchQuery(), this.selectedSort()));
    });
  }

  sortBy(stat: 'GP' | 'PTS' | 'MIN') {
    this.selectedSort.set(stat);
  }

  showAllPlayers() {
    this.searchQuery.set('');
    this.selectedSort.set(null);
  }
}
