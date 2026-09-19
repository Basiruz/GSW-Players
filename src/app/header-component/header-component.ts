import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppPostboyService } from '../postboy/app-postboy.service';
import { PlayersFilterChangedEvent } from '../models/events/players-filter-changed.event';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent implements OnInit, OnDestroy {
  readonly currentFilterLabel = signal('All Players');
  private subscription?: Subscription;

  constructor(private readonly postboy: AppPostboyService) { }

  ngOnInit(): void {
    this.subscription = this.postboy
      .sub(PlayersFilterChangedEvent)
      .subscribe((msg) => {
        let label = '';

      if (msg.sortBy) {
        label = `Sorted by ${msg.sortBy}`;

        if (msg.minValue !== null || msg.maxValue !== null) {
          const min = msg.minValue ?? 'Any';
          const max = msg.maxValue ?? 'Any';
          label += ` | Range: ${min} - ${max}`;
        }

        this.currentFilterLabel.set(label);
      } else if (msg.searchQuery) {
        this.currentFilterLabel.set(`Searching: "${msg.searchQuery}"`);
      } else {
        this.currentFilterLabel.set('All Players');
        }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
