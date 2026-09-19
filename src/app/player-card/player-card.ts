import { Component, Input } from '@angular/core';
import { PlayerStats } from '../models/player';
import { PlayerFilterService } from '../service/player-filter.service';
import { STAT_DEFINITIONS } from '../models/stat-definitions';

@Component({
  selector: 'app-player-card',
  standalone: true,
  templateUrl: './player-card.html',
  styleUrls: ['./player-card.css']
})
export class PlayerCardComponent {
  @Input() firstName!: string;
  @Input() lastName!: string;
  @Input() age!: number;
  @Input() jerseyNumber!: number;
  @Input() photo!: string;
  @Input() stats!: PlayerStats;

  readonly highlightedStat;
  readonly statDefinitions = STAT_DEFINITIONS;

  constructor(private readonly playerFilterService: PlayerFilterService) {
  this.highlightedStat = this.playerFilterService.selectedSort;
  }
}
