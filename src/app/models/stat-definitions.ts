import { PlayerStats } from './player';

export interface StatDefinitions {
  key: keyof PlayerStats;
  description: string;
}

export const STAT_DEFINITIONS: StatDefinitions[] = [
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

export function getStatDescription(
  key: keyof PlayerStats
): string {
  return STAT_DEFINITIONS.find(
    stat => stat.key === key
  )?.description ?? key;
}
