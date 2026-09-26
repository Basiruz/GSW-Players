import { PostboyGenericMessage } from '@artstesh/postboy';
import { SortStat } from '../../service/player-filter.service';

export class PlayersFilterChangedEvent extends PostboyGenericMessage {
  static readonly ID = 'players.filter-changed';

  constructor(
    public readonly searchQuery: string,
    public readonly sortBy: SortStat | null,
    public readonly minValue: number | null,
    public readonly maxValue: number | null,
  ) {
    super();
  }
}
