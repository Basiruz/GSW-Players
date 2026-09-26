import { Component } from '@angular/core';
import { PlayerCardComponent } from '../player-card/player-card';
import { PlayerService } from '../service/player.service';

@Component({
  selector: 'app-player-list',
  standalone: true,
  imports: [PlayerCardComponent],
  templateUrl: './player-list.html',
  styleUrls: ['./player-list.css']
})

export class PlayerListComponent {
  readonly players;

  constructor (private readonly playerService: PlayerService) {
    this.players = this.playerService.players;
  }
}


