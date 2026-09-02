import { PostboyGenericMessage } from '@artstesh/postboy';

export class PlayersFilterChangedEvent extends PostboyGenericMessage {
  static readonly ID = 'players.filter-changed';

  constructor(
    public readonly searchQuery: string,
    public readonly sortBy: 'GP' | 'PTS' | 'MIN' | null
  ) {
    super();
  }
}
