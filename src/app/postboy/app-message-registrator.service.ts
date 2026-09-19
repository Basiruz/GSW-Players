import { Injectable } from '@angular/core';
import { PostboyAbstractRegistrator } from '@artstesh/postboy';
import { AppPostboyService } from './app-postboy.service';
import { PlayersFilterChangedEvent } from '../models/events/players-filter-changed.event';

@Injectable({providedIn: 'root'})
export class AppMessageRegistrator extends PostboyAbstractRegistrator {
  constructor(postboy: AppPostboyService) {
    super(postboy);
  }

  protected _up(): void {
    this.recordSubject(PlayersFilterChangedEvent);
  }
}
