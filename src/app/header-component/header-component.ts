import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { postboy } from '../postboy.instance';
import { PlayersFilterChangedEvent } from '../models/events/players-filter-changed.event';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentFilterLabel = signal('All players');
  private subscription?: Subscription;

  ngOnInit(): void {
    this.subscription = postboy.sub(PlayersFilterChangedEvent).subscribe((msg) => {
      if (msg.sortBy) {
        this.currentFilterLabel.set(`Sorted by ${msg.sortBy}`);
      } else if (msg.searchQuery) {
        this.currentFilterLabel.set(`Searching: "${msg.searchQuery}"`);
      } else {
        this.currentFilterLabel.set('All players');
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
