import { Component, OnDestroy } from '@angular/core';
import { HeaderComponent } from './header-component/header-component';
import { AppMessageRegistrator } from './postboy/app-message-registrator.service';
import { PlayerListComponent } from './player-list/player-list';
import { PlayerFilterComponent } from './player-filter/player-filter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, PlayerListComponent, PlayerFilterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class AppComponent implements OnDestroy {
  constructor(private readonly appMessageRegistrator: AppMessageRegistrator) {
    this.appMessageRegistrator.up();
  }

  ngOnDestroy(): void {
    this.appMessageRegistrator.down();
  }
}
