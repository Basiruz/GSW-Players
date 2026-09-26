import { ChangeDetectionStrategy, Component, input, Signal } from '@angular/core';
import { PlayerStats } from '../models/player';
import { PlayerFilterService, SortStat } from '../service/player-filter.service';
import { STAT_DEFINITIONS } from '../models/stat-definitions';

@Component({
  selector: 'app-player-card',
  standalone: true,
  templateUrl: './player-card.html',
  styleUrls: ['./player-card.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerCardComponent {
  readonly firstName = input.required<string>();
  readonly lastName = input.required<string>();
  readonly age = input.required<number>();
  readonly jerseyNumber = input.required<number>();
  readonly photo = input.required<string>();
  readonly stats = input.required<PlayerStats>();

  readonly highlightedStat: Signal<SortStat | null>;
  readonly statDefinitions = STAT_DEFINITIONS;

  constructor(private readonly playerFilterService: PlayerFilterService) {
    this.highlightedStat = this.playerFilterService.selectedSort;
  }
}
