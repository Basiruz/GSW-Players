import { Component } from '@angular/core';
import { ConnectMessage } from '@artstesh/postboy';
import { Subject } from 'rxjs';
import { HeaderComponent } from './header-component/header-component';
import { PlayerListComponent } from './player-list/player-list';
import { postboy } from './postboy.instance';
import { PlayersFilterChangedEvent } from './models/events/players-filter-changed.event';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, PlayerListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  constructor() {
    postboy.exec(new ConnectMessage(PlayersFilterChangedEvent, new Subject<PlayersFilterChangedEvent>()));
  }
}
