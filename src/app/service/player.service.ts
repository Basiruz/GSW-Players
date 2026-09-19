import { Injectable, signal } from '@angular/core';
import { Player } from '../models/player';
import { PLAYERS } from '../models/player-data';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  readonly players = signal<Player[]>(PLAYERS);

  setPlayers(players: Player[]): void {
    this.players.set(players);
  }
  getAllPlayers(): Player[] {
    return PLAYERS;
  }
}
