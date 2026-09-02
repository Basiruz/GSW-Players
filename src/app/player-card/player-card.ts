import { Component, Input } from '@angular/core';
import { PlayerStats } from '../models/player';

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
  @Input() highlightedStat: keyof PlayerStats | null = null;

  readonly statDefinitions: {
    key: keyof PlayerStats;
    description: string;
  }[] = [
    { key: 'GP', description: 'Games Played' },
    { key: 'PTS', description: 'Points Per Game' },
    { key: 'MIN', description: 'Minutes Per Game' },
    { key: 'AST', description: 'Assists Per Game' },
    { key: 'REB', description: 'Rebounds Per Game' },
    { key: 'STL', description: 'Steals Per Game' },
    { key: 'BLK', description: 'Blocks Per Game' },
    { key: 'TO', description: 'Turnovers Per Game' },
    { key: 'PF', description: 'Personal Fouls Per Game' }
  ];
}
